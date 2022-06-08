export interface IModal {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: (e: React.MouseEvent) => void;
}
