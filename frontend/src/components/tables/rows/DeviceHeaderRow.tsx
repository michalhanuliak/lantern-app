import { Dispatch, SetStateAction, useMemo } from 'react';
import { DATA_TABLE_COLUMNS } from '../../../constants';
import {
  TableHeaderRow,
  TableHeader,
  TableHeaderContent,
  TableActionButton,
} from '../../../styles/components/DeviceHeaderRow.style';
import { Device } from '../../../types/Device.type';
import {
  SortByOptions,
  SortData,
  SortDirection,
} from '../../../types/Sort.type';

interface IDeviceHeaderRow {
  setSortOption: Dispatch<SetStateAction<SortData>>;
  actionButton: React.ReactNode;
  renderSortDirectionArrow: (headerKey: SortByOptions) => JSX.Element | null;
}

const DeviceHeaderRow = ({
  setSortOption,
  actionButton,
  renderSortDirectionArrow,
}: IDeviceHeaderRow) => {
  const handleSortClick = (prev: SortData, key: keyof Device) => {
    const isNewSortBy = key !== prev.sortBy;

    return {
      sortBy: key as SortByOptions,
      direction:
        prev.direction === SortDirection.ASC && !isNewSortBy
          ? SortDirection.DESC
          : SortDirection.ASC,
    };
  };

  const renderColumns = useMemo(
    () =>
      Object.entries(DATA_TABLE_COLUMNS).map(([key, value]) => {
        const isSortable = !!Object(SortByOptions)[key];

        return (
          <TableHeader
            onClick={() => {
              if (isSortable)
                setSortOption((prev: SortData) =>
                  handleSortClick(prev, key as keyof Device),
                );
            }}
            isSortable={isSortable}
            key={key}
          >
            <TableHeaderContent>
              {value}
              {renderSortDirectionArrow(key as SortByOptions)}
            </TableHeaderContent>
          </TableHeader>
        );
      }),
    [setSortOption, renderSortDirectionArrow],
  );

  return (
    <thead>
      <TableHeaderRow>
        {renderColumns}
        <TableHeader>
          <TableActionButton>{actionButton}</TableActionButton>
        </TableHeader>
      </TableHeaderRow>
    </thead>
  );
};

export default DeviceHeaderRow;
