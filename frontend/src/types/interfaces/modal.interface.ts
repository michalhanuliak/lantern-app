export interface IModal {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
