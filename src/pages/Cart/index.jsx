import Header from "../../design/structures/Header";
import ButtonCart from "../../design/components/Button/ButtonCart";
import Title from "../../design/components/Title";
import { Text } from "../../design/components/Text";
import Card from "../../design/components/Card";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import CloseButton from "../../design/components/Button/CloseButton";

import React, { useContext } from "react";

import { ContextCart } from "../../context/CartContext";

import {treatPrice} from '../../utils/index'

import {
  Container,
  MyProducts,
  GamesBuy,
  TotalBuy,
  SpaceButton,
} from "./styles";

export default function Cart() {
  const { cartProducts, removeCartProduct, totalCartProducts, freight } =
    useContext(ContextCart);

  return (
    <>
      <Header>
        <ButtonCart>
          <span>{cartProducts.length}</span>
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

          {cartProducts.map((product) => (
            <GamesBuy key={product.id}>
              <Text type="text">
                <Text type="h5">
                  <span class="close">
                    <CloseButton
                      onClick={() => removeCartProduct(product)}
                    ></CloseButton>
                  </span>
                  {product?.name}
                  <span>{treatPrice(product?.price)}</span>
                </Text>
              </Text>
            </GamesBuy>
          ))}

          <TotalBuy>
            <Text type="text">
              <span class="Freight">Frete</span>
              <span class="priceFreight">{treatPrice(freight)}</span>
              <Text type="h4">
                Total<span class="totalPrice">{treatPrice(totalCartProducts)}</span>
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
