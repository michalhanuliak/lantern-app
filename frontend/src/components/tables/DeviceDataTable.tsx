import { useCallback } from 'react';
import { DATA_TABLE_COLUMNS } from '../../constants';
import useDeviceSort from '../../hooks/useDeviceSort';
import {
  Table,
  Loader,
  LoaderWrapper,
} from '../../styles/components/DeviceDataTable.style';
import { IDataTable } from '../../types/interfaces/deviceDataTable.interface';
import DeviceHeaderRow from './rows/DeviceHeaderRow';
import DeviceRow from './rows/DeviceRow';

const DataTable = ({
  rows,
  handleDelete,
  isLoading,
  actionButton,
}: IDataTable) => {
  const { handleSort, setSortOption, renderSortDirectionArrow } =
    useDeviceSort();

  const renderRows = useCallback(() => {
    const sortedRows = handleSort(rows);

    return sortedRows.map((row) => (
      <DeviceRow key={row.objectId} rowData={row} handleDelete={handleDelete} />
    ));
  }, [rows, handleSort]);

  // TODO: Fix broken UI on safari
  const WaitingLoader = (
    <tr>
      <LoaderWrapper
        data-cy="loadingSpinner"
        colSpan={Object.entries(DATA_TABLE_COLUMNS).length + 1}
      >
        <Loader color="gray" />
      </LoaderWrapper>
    </tr>
  );

  return (
    <Table>
      <DeviceHeaderRow
        setSortOption={setSortOption}
        actionButton={actionButton}
        renderSortDirectionArrow={renderSortDirectionArrow}
      />
      <tbody data-cy="deviceTableBody">
        {isLoading ? WaitingLoader : renderRows()}
      </tbody>
    </Table>
  );
};

export default DataTable;
