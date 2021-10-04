import React, { useState, useEffect, useContext, useCallback } from "react";

import { context } from "../../context/CartContext";

import Header from "../../design/structures/Header";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import ButtonCart from "../../design/components/Button/ButtonCart";
import CloseButton from "../../design/components/Button/CloseButton";
import CardModal from "../../design/components/Card/CardModal";
import Modal from "../../design/components/Modal";

import {
  Container,
  Image,
  Star,
  ContainerModal,
  AlignButtonClose,
  ContainerTitle,
  Content
} from "./styles";
import { render } from "@testing-library/react";

export default function Home() {
  const [show, setShow] = useState();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  // const [products, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch("./products.json", {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => setProduct(res));
  // }, []);

  const { products, setProduct } = useContext(context);

  function onFilterChange(event) {
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
  }

  const renderModal = useCallback(() => {
    return (
      <Modal>
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

        <PrimaryButton>
          <Text type="text">
            <Text type="buttonText">Adicionar ao carrinho</Text>
          </Text>
        </PrimaryButton>
      </Modal>
    );
  }, [
    handleSelectProduct,
    selectedProduct?.image,
    selectedProduct?.name,
    selectedProduct?.price,
  ]);

  return (
    <>
      <Header>
        <ButtonCart>
          <span>1</span>
        </ButtonCart>
      </Header>
    <Content>
      <ContainerTitle>
        <Title>
          <Text type="text">
            <Text type="h3">Jogos</Text>
            <Text type="small">PRODUTOS DISPONÍVEIS</Text>
          </Text>
        </Title>

        <SelectFilter onChange={onFilterChange}></SelectFilter>
      </ContainerTitle>

      <Container>
        {products.map((product) => {
          return (
            <Card onClick={() => handleSelectProduct(product)} key={product.id}>
              {console.log(product.id)}
              <>
                <Image
                  value={product.name}
                  src={`assets/images/${product.image}.png`}
                  alt="image"
                />
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
