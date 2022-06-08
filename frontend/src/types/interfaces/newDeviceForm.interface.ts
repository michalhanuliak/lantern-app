import { Device } from '../Device.type';

export interface INewDeviceForm {
  onSubmit: (deviceData: Device) => void;
}
