import React, { useState, useContext, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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


import {treatPrice} from '../../utils/index'

import {
  Container,
  Image,
  ImageModal,
  Star,
  StarModal,
  StarHalfModal,
  StarHalf,
  AlignButtonClose,
  SpaceButtonPrimary,
  ContainerTitle,
  Content,
  ContentTextTitle,
  ContainerHeader,
  SmallContainer,
  AlignTextsCard,
} from "./styles";

export default function Home() {
  const notify = () => toast("Produto adicionado ao carrinho");

  const { products, setProduct } = useContext(ContextProduct);
  const { cartProducts, setCartProduct, addCartProduct } =
    useContext(ContextCart);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const onFilterChange = useCallback((event) => {
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
  },[products, setProduct]);

  const renderModal = useCallback(() => {
    return (
      <Modal>
        <AlignTextsCard>
          <AlignButtonClose onClick={() => handleSelectProduct(null)}>
            <CloseButton></CloseButton>
          </AlignButtonClose>
          <ImageModal
            src={`assets/images/${selectedProduct?.image}.png`}
            alt="image"
          ></ImageModal>
          <Text type="text">
            <Text type="p">{selectedProduct?.name}</Text>
          </Text>
          <Text type="text">
            <StarModal/>
            <StarModal/>
            <StarModal/>
            <StarModal/>
            <StarHalfModal/>
          </Text>

          <Text type="text">
            <Text type="smallBold">POR APENAS</Text>
          </Text>

          <Text type="text">
            <Text type="h3BuyModal">{treatPrice(selectedProduct?.price)}</Text>
          </Text>
          <SpaceButtonPrimary>
          <PrimaryButton
            onClick={function () {
              addCartProduct(selectedProduct);
              notify();
            }}
          >
            <ToastContainer theme="colored" autoClose={2500} />
            <Text type="text">
              <Text type="buttonText">Adicionar ao carrinho</Text>
            </Text>
          </PrimaryButton>
          </SpaceButtonPrimary>
        </AlignTextsCard>
      </Modal>
    );
  }, [addCartProduct, handleSelectProduct, selectedProduct]);

  return (
    <>
      <ContainerHeader>
        <Header>
          <ButtonCart>
            <span>{cartProducts.length}</span>
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
                    src={`assets/images/${product?.image}.png`}
                    alt="image"
                  />
                  <AlignTextsCard>
                    <Text type="text">
                      <Text type="h5Transparent">PLAYSTATION</Text>
                    </Text>
                    <Text type="text">
                      <Text type="p">{product?.name}</Text>
                    </Text>
                    <Text type="text">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <StarHalf />
                      <SmallContainer>
                      <Text type="small">({product?.score})</Text>
                      </SmallContainer>
                    </Text>

                    <Text type="text">
                      <Text type="h4buy">{treatPrice(product?.price)}</Text>
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
