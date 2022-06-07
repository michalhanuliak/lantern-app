import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from '../axiosInstance';
import { QueryKeys } from '../react-query/constants';
import {
  Device,
  DeviceMutationTypes,
  DeviceMutation,
} from '../types/Device.type';

const createDeviceWithTempId = (data: Device[]) => ({
  ...data,
  objectId: Date.now().toString(),
});

const getDevices = async () => {
  const { data } = await axiosInstance.get('/classes/Device');
  return data.results;
};

const useDevices = () => {
  const [deviceData, setDeviceData] = useState<Device[]>();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery(QueryKeys.DEVICES, getDevices);

  const deviceMutation = useMutation(
    (mutationData: DeviceMutation) => {
      const { payload, mutationType } = mutationData;
      return mutationType === DeviceMutationTypes.DELETE
        ? axiosInstance.delete(`/classes/Device/${payload}`)
        : axiosInstance.post(`/classes/Device/`, payload);
    },
    {
      onMutate: async (mutationData: DeviceMutation) => {
        const { payload, mutationType } = mutationData;

        queryClient.cancelQueries(QueryKeys.DEVICES);

        const previousDeviceData =
          queryClient?.getQueryData<Device[]>(QueryKeys.DEVICES) || [];

        const newData =
          mutationType === DeviceMutationTypes.DELETE
            ? previousDeviceData.filter((device) => device.objectId !== payload)
            : [
                ...previousDeviceData,
                createDeviceWithTempId(payload as unknown as Device[]),
              ];

        // Optimistic update
        setDeviceData(newData as Device[]);
        queryClient.setQueryData(QueryKeys.DEVICES, newData);

        // TODO: Error toast

        return { previousDeviceData };
      },
      onSuccess: () => {
        // Revalidates data
        queryClient.invalidateQueries([QueryKeys.DEVICES]);
      },
      onError: (error, _, context) => {
        // Rollback data
        if (context?.previousDeviceData) {
          setDeviceData(context.previousDeviceData);
        }

        // TODO: Error toast
      },
      onSettled: () => {
        queryClient.invalidateQueries(QueryKeys.DEVICES);
      },
    },
  );

  const handleDelete = (id: string) => {
    // TODO: Add modal for confirmation
    deviceMutation.mutate({
      payload: id,
      mutationType: DeviceMutationTypes.DELETE,
    });
  };

  const handleAdd = (device: Device) => {
    deviceMutation.mutate({
      payload: device,
      mutationType: DeviceMutationTypes.CREATE,
    });
  };

  useEffect(() => {
    setDeviceData(data);
  }, [data]);

  return {
    handleDelete,
    handleAdd,
    deviceData,
    isLoading,
  };
};

export default useDevices;
