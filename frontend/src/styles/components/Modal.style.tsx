import tw, { styled } from 'twin.macro';
import { XIcon } from '@heroicons/react/solid';

export const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);
  ${tw`
    absolute
    top-0
    flex
    flex-col
    items-center
    justify-center
    w-screen
    h-screen
  `};
`;

export const ModalHeader = styled.div`
  ${tw`
    relative
    flex
    justify-between
    mb-4
  `};

  &::before {
    content: '';
    left: -1rem;
    ${tw`
    absolute
    bottom-0
    w-16
    h-1
    bg-blue-600
  `};
  }
`;

export const ModalTitle = styled.div`
  ${tw`
    mb-4
    max-w-screen-md
    bg-white
    font-semibold
    text-2xl
  `};
`;

export const ModalCloseButton = styled(XIcon)`
  ${tw`
    z-10
    duration-100
    h-6
  `};
  &:hover {
    ${tw`
        cursor-pointer
        text-blue-600
    `}
  }
`;

export const ModalContent = styled.div`
  ${tw`
    rounded-md
    max-w-screen-md
    p-4
    bg-white
  `};
`;
