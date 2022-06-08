import { Dispatch, SetStateAction } from 'react';
import { SortData, SortByOptions } from '../Sort.type';

export interface IDeviceHeaderRow {
  setSortOption: Dispatch<SetStateAction<SortData>>;
  actionButton: React.ReactNode;
  renderSortDirectionArrow: (headerKey: SortByOptions) => JSX.Element | null;
}
