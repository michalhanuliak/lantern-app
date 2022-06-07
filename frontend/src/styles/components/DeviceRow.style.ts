import TrashIcon from '@heroicons/react/solid/TrashIcon';
import styled from 'styled-components';
import tw from 'twin.macro';

export const TableColumn = styled.td`
  ${tw`
    p-4
    border-r-2
    border-solid
    border-gray-200
    text-left
  `}
`;

export const TableRow = styled.tr`
  ${tw`
    border-b-2
    border-solid
    border-gray-100
  `}

  &:nth-of-type(2n) {
    ${tw`
      bg-gray-100
    `}
  }
`;

export const ItemRemoveCell = styled(TableColumn)`
  ${tw`
    text-center
  `}
`;

export const ItemRemoveButton = styled(TrashIcon)`
  ${tw`
    w-5
    text-gray-500
    duration-100
  `}

  &:hover {
    ${tw`
      text-red-500
      cursor-pointer
    `}
  }
`;
