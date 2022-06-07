import { DATA_TABLE_COLUMNS } from '../../../constants';
import useDate from '../../../hooks/useDate';
import {
  TableRow,
  TableColumn,
  ItemRemoveCell,
  ItemRemoveButton,
} from '../../../styles/components/DeviceRow.style';
import { Device } from '../../../types/Device.type';

interface IDeviceRow {
  rowData: Device;
  handleDelete: (id: string) => void;
}

const DeviceRow = ({ rowData, handleDelete }: IDeviceRow) => {
  const { getReadableDate } = useDate();

  const renderColumns = Object.entries(DATA_TABLE_COLUMNS).map(([key]) => {
    const value = rowData[key as keyof Device];
    return (
      <TableColumn key={key}>
        {(key === 'createdAt' ? getReadableDate(value) : value) || '--'}
      </TableColumn>
    );
  });

  return (
    <TableRow>
      {renderColumns}
      <ItemRemoveCell text-align="center">
        <ItemRemoveButton
          data-cy={`deviceRemoveButton-${rowData.objectId}`}
          onClick={() => handleDelete(rowData.objectId)}
        />
      </ItemRemoveCell>
    </TableRow>
  );
};

export default DeviceRow;
