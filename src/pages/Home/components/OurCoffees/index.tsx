import { TitleText } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffee";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeContainer } from "./styles";

export function OurCoffees() {
  return (
    <OurCoffeContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeContainer>
  )
}