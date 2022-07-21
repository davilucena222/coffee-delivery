import { CurrencyDollar, MapPin } from "phosphor-react";
import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return(
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete o seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle 
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber o seu pedido"
          icon={<MapPin color={colors['brand-yellow-dark']} />}
        />

        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle 
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={<CurrencyDollar color={colors['brand-purple']} />}
        />

        <PaymentMethodOptions />
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  )
}