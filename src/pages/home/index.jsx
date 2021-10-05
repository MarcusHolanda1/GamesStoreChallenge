import React, { useState, useEffect, useContext, useCallback } from "react";

import { ContextProduct } from "../../context/ProductContext";
import { ContextCart } from "../../context/CartContext";

import Header from "../../design/structures/Header";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import ButtonCart from "../../design/components/Button/ButtonCart";
import CloseButton from "../../design/components/Button/CloseButton";
import Modal from "../../design/components/Modal";

import {
  Container,
  Image,
  Star,
  AlignButtonClose,
  ContainerTitle,
  Content,
  ContentTextTitle,
  ContainerHeader,
  AlignTextsCard,
} from "./styles";

export default function Home() {
  const { products, setProduct } = useContext(ContextProduct);
  const {cartProducts, setCartProduct, addCartProduct} = useContext(ContextCart);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const onFilterChange = (event) => {
    const option = event.target.selectedOptions[0];
    const field = option.value;
    const isASC = option.dataset.filter === "ASC";
    const isNumberField = ["price", "score"].includes(field);

    const sortedProducts = [...products].sort(function (a, b) {
      if (isASC) {
        return isNumberField
          ? a[field] - b[field]
          : a[field].localeCompare(b[field]);
      } else {
        return isNumberField
          ? b[field] - a[field]
          : b[field].localeCompare(a[field]);
      }
    });
    setProduct(sortedProducts);
  };

 

  const renderModal = useCallback(() => {
    return (
      <Modal>
        <AlignTextsCard>
        <AlignButtonClose onClick={() => handleSelectProduct(null)}>
          <CloseButton></CloseButton>
        </AlignButtonClose>
        <Image
          src={`assets/images/${selectedProduct?.image}.png`}
          alt="image"
        ></Image>
        <Text type="text">
          <Text type="p">{selectedProduct?.name}</Text>
        </Text>
        <Text type="text">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </Text>

        <Text type="text">
          <Text type="p">Por apenas</Text>
        </Text>

        <Text type="text">
          <Text type="h3BuyModal">{selectedProduct?.price}</Text>
        </Text>

        <PrimaryButton onClick={() => addCartProduct(selectedProduct)}>
          <Text type="text">
            <Text type="buttonText">Adicionar ao carrinho</Text>
          </Text>
        </PrimaryButton>
        </AlignTextsCard>
      </Modal>
    );
  }, [addCartProduct, handleSelectProduct, selectedProduct]);

  return (
    <>
      
        <ContainerHeader>
          <Header>
            <ButtonCart>
              <span>1</span>
            </ButtonCart>
          </Header>
        </ContainerHeader>

      <Content>
        <ContainerTitle>
          <Title>
            <ContentTextTitle>
              <Text type="text">
                <Text type="h3">Jogos</Text>
                <Text type="small">PRODUTOS DISPONÍVEIS</Text>
              </Text>
            </ContentTextTitle>
          </Title>

          <SelectFilter onChange={onFilterChange}></SelectFilter>
        </ContainerTitle>

        <Container>
          {products.map((product) => {
            return (
              <Card
                onClick={() => handleSelectProduct(product)}
                key={product.id}
              >
                <>
                  <Image
                    value={product.name}
                    src={`assets/images/${product.image}.png`}
                    alt="image"
                  />
                  <AlignTextsCard>
                  <Text type="text">
                    <Text type="h5Transparent">PLAYSTATION</Text>
                  </Text>
                  <Text type="text">
                    <Text type="p">{product.name}</Text>
                  </Text>
                  <Text type="text">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Text type="small">({product.score})</Text>
                  </Text>

                  <Text type="text">
                    <Text type="h4buy">R$ {product.price}</Text>
                  </Text>
                  </AlignTextsCard>
                </>{" "}
              </Card>
            );
          })}
        </Container>
      </Content>

      {selectedProduct && renderModal()}
    </>
  );
}
