export interface ButtonProps {
  title: string;
  variant?: string;
  onClick?: () => void;
  type?: string;
}

export interface ButtonContainerProps {
  variant: string;
}