import { PlusIcon } from '@heroicons/react/solid';
import { useCallback } from 'react';
import NewDeviceForm from '../components/forms/NewDeviceForm';
import Modal from '../components/modals/Modal';
import DeviceDataTable from '../components/tables/DeviceDataTable';
import useDevices from '../hooks/useDevices';
import useModal from '../hooks/useModal';
import { AddDeviceButton } from '../styles/pages/Devices.style';
import { Device } from '../types/Device.type';

const DevicesPage = () => {
  const { isLoading, deviceData, handleDelete, handleAdd } = useDevices();

  const { isModalOpen, handleModalClose, handleModalOpen } = useModal();

  const handleDeviceSubmit = useCallback(
    (data: Device) => {
      handleAdd(data);
      handleModalClose();
    },
    [handleAdd, handleModalClose],
  );

  return (
    <>
      <DeviceDataTable
        rows={deviceData || []}
        handleDelete={handleDelete}
        isLoading={isLoading}
        actionButton={
          <AddDeviceButton data-cy="addDeviceButton" onClick={handleModalOpen}>
            <PlusIcon />
            Add device
          </AddDeviceButton>
        }
      />
      <Modal
        title="Add device"
        isOpen={isModalOpen}
        handleClose={handleModalClose}
      >
        <NewDeviceForm onSubmit={handleDeviceSubmit} />
      </Modal>
    </>
  );
};

export default DevicesPage;
