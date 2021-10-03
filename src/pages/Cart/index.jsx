import Header from "../../design/structures/Header";
import ButtonCart from "../../design/components/Button/ButtonCart";
import Title from "../../design/components/Title";
import { Text } from "../../design/components/Text";
import Card from "../../design/components/Card";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import CloseButton from "../../design/components/Button/CloseButton";

import {
  Container,
  MyProducts,
  GamesBuy,
  TotalBuy,
  SpaceButton,
} from "./styles";

export default function Cart() {
  return (
    <>
      <Header>
        <ButtonCart>
          <span>8</span>
        </ButtonCart>
      </Header>
      <Title>
        <Text type="text">
          <Text type="h3">Carrinho</Text>
          <Text type="small">PRODUTOS SELECIONADOS</Text>
        </Text>
      </Title>
      <Container>
        <Card>
          <MyProducts>
            <Text type="text">
              <Text type="h4">Meus produtos</Text>
            </Text>
          </MyProducts>

          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                <span class="close">
                  <CloseButton></CloseButton>
                </span>
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>

          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                <span class="close">
                  <CloseButton></CloseButton>
                </span>
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>

          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                <span class="close">
                  <CloseButton></CloseButton>
                </span>
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>

          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                <span class="close">
                  <CloseButton></CloseButton>
                </span>
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>

          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                <span class="close">
                  <CloseButton></CloseButton>
                </span>
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>

          <TotalBuy>
            <Text type="text">
              <span class="Freight">Frete</span>
              <span class="priceFreight">R$ 79,90</span>
              <Text type="h4">
                Total<span class="totalPrice">R$ 79,90</span>
              </Text>
            </Text>
          </TotalBuy>
        </Card>

        <SpaceButton>
          <PrimaryButton>
            <Text type="text">
              <Text type="buttonText">Finalizar compra</Text>
            </Text>
          </PrimaryButton>
        </SpaceButton>
      </Container>
    </>
  );
}
