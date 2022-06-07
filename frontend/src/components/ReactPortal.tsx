import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IReactPortal {
  wrapperId: string;
  children: ReactNode;
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');

  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);

  return wrapperElement;
};

const ReactPortal = ({
  children,
  wrapperId = 'react-portal-wrapper',
}: IReactPortal) => {
  let targetElement = document.getElementById(wrapperId);

  if (!targetElement) {
    targetElement = createWrapperAndAppendToBody(wrapperId);
  }

  return createPortal(children, targetElement);
};
export default ReactPortal;
