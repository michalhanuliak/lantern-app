import tw, { styled } from 'twin.macro';

export const AddDeviceButton = styled.button`
  ${tw`
    flex
    items-center
    content-center
    rounded
    border-0
    py-2
    px-4
    bg-blue-600
    text-white
    duration-100
  `}
  &:hover {
    ${tw`
      cursor-pointer
      bg-blue-500
    `}
  }
  & > svg {
    ${tw`
      mr-2
      w-4
    `}
  }
`;
