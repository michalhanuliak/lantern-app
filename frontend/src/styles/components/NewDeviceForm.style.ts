import styled from 'styled-components';
import tw from 'twin.macro';

export const DeviceForm = styled.form`
  ${tw`
    flex
    flex-col
  `}
`;

export const DeviceInfoLabel = styled.label`
  ${tw`
    flex
    flex-col
    font-semibold
    text-gray-800
  `}
`;

export const DeviceInfoInput = styled.input`
  ${tw`
    mt-2
    mb-4
    border-2
    border-solid
    rounded-md
    border-gray-300
    box-border
    w-screen
    max-w-md
    p-2
    text-gray-700
  `}
`;

export const DeviceSubmitButton = styled.button`
  ${tw`
    mt-2
    border-0
    rounded-md
    p-2
    bg-blue-600
    font-semibold
    text-white
    duration-100
  `}
  &:hover {
    ${tw`
      cursor-pointer
      bg-blue-500
    `}
  }
  &[disabled] {
    ${tw`
      cursor-not-allowed
      bg-gray-300
    `}
    &:hover {
      bg-gray-300
    }
  }
`;
