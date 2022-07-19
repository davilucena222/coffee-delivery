import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import logoCoffeDelivery from '../../assets/logo-coffe-delivery.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return(
    <HeaderContainer>
      <div className="container">
        <img src={logoCoffeDelivery} alt="" />
        
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}