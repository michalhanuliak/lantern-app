import { createPortal } from 'react-dom';
import { IReactPortal } from '../types/interfaces/reactPortal.interface';

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
