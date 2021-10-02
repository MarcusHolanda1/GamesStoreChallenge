import Header from "../../design/structures/Header";
import ButtonCart from "../../design/components/ButtonCart";
import Title from "../../design/components/Title";
import { Text } from "../../design/components/Text";
import Card from "../../design/components/Card";
import Button from "../../design/components/Button";

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
          <span>1</span>
        </ButtonCart>
      </Header>
      <Title></Title>
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
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
                Call of Duty WWII<span>R$ 79,90</span>
              </Text>
            </Text>
          </GamesBuy>
          <GamesBuy>
            <Text type="text">
              <Text type="h5">
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
          <Button>
            <Text type="text">
              <Text type="buttonText">Finalizar compra</Text>
            </Text>
          </Button>
        </SpaceButton>
      </Container>
    </>
  );
}
