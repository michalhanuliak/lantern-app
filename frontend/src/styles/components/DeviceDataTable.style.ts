import HashLoader from 'react-spinners/HashLoader';
import tw, { styled } from 'twin.macro';

export const Table = styled.table`
  ${tw`
    w-full
    border-collapse
  `}
`;

export const LoaderWrapper = styled.td`
  height: calc(100vh - 6rem);
  ${tw`
    w-screen
    text-center
  `}
`;

export const Loader = styled(HashLoader)`
  ${tw`
    w-screen
  `}
`;
