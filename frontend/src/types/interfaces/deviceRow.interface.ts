import { Device } from '../Device.type';

export interface IDeviceRow {
  rowData: Device;
  handleDelete: (id: string) => void;
}
