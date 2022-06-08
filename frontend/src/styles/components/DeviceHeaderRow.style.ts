import styled from 'styled-components';
import tw from 'twin.macro';
import { TableRow } from './DeviceRow.style';

export const TableHeaderRow = styled(TableRow)`
  ${tw`
    z-10
    shadow-md
    border-none
  `}
`;

export const TableHeader = styled('th')<{ isSortable?: boolean }>`
  height: 4rem;
  ${tw`
    border-r-2
    border-solid
    border-gray-100
    px-4
    text-gray-700
    text-left
    duration-100
  `}

  &:hover {
    cursor: ${(props) => (props.isSortable ? 'pointer' : 'unset')};
    background: ${(props) => (props.isSortable ? 'rgba(0,0,0,0.05)' : 'none')};
  }
`;

export const TableHeaderContent = styled.span`
  ${tw`
    relative
    flex
    items-center
  `}

  & > svg {
    ${tw`
      absolute
      right-0
      w-8
      text-blue-500
    `}
  }
`;

export const TableActionButton = styled(TableHeaderContent)`
  ${tw`
    justify-center
  `}
`;
