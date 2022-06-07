import { useForm } from 'react-hook-form';
import {
  DeviceForm,
  DeviceInfoInput,
  DeviceInfoLabel,
  DeviceSubmitButton,
} from '../../styles/components/NewDeviceForm.style';
import { Device, OsType } from '../../types/Device.type';

interface INewDeviceForm {
  onSubmit: (deviceData: Device) => void;
}

const NewDeviceForm = ({ onSubmit }: INewDeviceForm) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<Device>({ mode: 'onChange' });

  return (
    <DeviceForm onSubmit={handleSubmit(onSubmit)}>
      <DeviceInfoLabel>
        Device name
        <DeviceInfoInput
          data-cy="inputDeviceName"
          {...register('deviceName', { required: true })}
        />
      </DeviceInfoLabel>

      <DeviceInfoLabel>
        OS Type
        <DeviceInfoInput as="select" {...register('osType')}>
          <option value={OsType.IPHONE}>Iphone</option>
          <option value={OsType.ANDOROID}>Android</option>
          <option value={OsType.WINDOWS}>WindowsPhone</option>
        </DeviceInfoInput>
      </DeviceInfoLabel>

      <DeviceInfoLabel>
        Country ISO Code
        <DeviceInfoInput
          data-cy="inputIsoCode"
          {...register('countryIsoCode', { required: true })}
        />
      </DeviceInfoLabel>

      <DeviceSubmitButton data-cy="submitNewDeviceButton" disabled={!isValid}>
        {isValid ? 'Submit' : 'Inputs can not be empty'}
      </DeviceSubmitButton>
    </DeviceForm>
  );
};

export default NewDeviceForm;
