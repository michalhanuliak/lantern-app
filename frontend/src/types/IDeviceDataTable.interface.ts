import { Device } from './Device.type';

export interface IDataTable {
  rows: Device[];
  handleDelete: (id: string) => void;
  isLoading: boolean;
  actionButton: React.ReactNode;
}
