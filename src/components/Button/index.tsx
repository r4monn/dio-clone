import { ButtonContainer } from "./styles";
import { ButtonProps } from "./types";

export function Button({ title, variant = "primary", onClick }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}