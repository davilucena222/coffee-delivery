import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus />
      </IconWrapper>
      <input type="number" readOnly value={1} />
      <IconWrapper>
        <Plus />
      </IconWrapper>
    </QuantityInputContainer>
  )
}