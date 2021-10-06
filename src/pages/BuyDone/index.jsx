import React, { useContext } from "react";
import { ContextCart } from "../../context/CartContext";

import Header from "../../design/structures/Header";
import ButtonCart from "../../design/components/Button/ButtonCart";
import Title from "../../design/components/Title";
import { Text } from "../../design/components/Text";
import GamerLoad from '../../design/animations/gamerLoop'


import {
  Container,
} from "./styles";

export default function Cart() {
  const { cartProducts } =
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

      <h1>Compra finalizada</h1>
          <GamerLoad/>
          <h2>Agora basta esperar sua encomenda chegar</h2>
      </Container>
    </>
  );
}
