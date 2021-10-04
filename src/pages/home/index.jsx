import React, { useState, useEffect } from "react";

import Header from "../../design/structures/Header";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import ButtonCart from "../../design/components/Button/ButtonCart";
import CloseButton from "../../design/components/Button/CloseButton";
import CardModal from "../../design/components/Card/CardModal";

import {
  Container,
  Image,
  Star,
  ContainerModal,
  AlignButtonClose,
} from "./styles";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleModalClose = (e) => {
    setShow(false);
  };

  const handleModalOpen = () => {
    setShow(true);
  };

  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("./products.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

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

  return (
    <>
      <div hidden={!show}>
        <ContainerModal>
          <CardModal>
            <AlignButtonClose onClick={() => handleModalClose("/repos")}>
              <CloseButton></CloseButton>
            </AlignButtonClose>
            <Image src={""} alt=""></Image>
            <Text type="text">
              <Text type="p">Call of Duty WWII</Text>
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
              <Text type="h3BuyModal">R$ 79,90</Text>
            </Text>

            <PrimaryButton>
              <Text type="text">
                <Text type="buttonText">Adicionar ao carrinho</Text>
              </Text>
            </PrimaryButton>
          </CardModal>
        </ContainerModal>
      </div>

      <Header>
        <ButtonCart>
          <span>1</span>
        </ButtonCart>
      </Header>

      <SelectFilter onChange={onFilterChange}></SelectFilter>

      <Title>
        <Text type="text">
          <Text type="h3">Jogos</Text>
          <Text type="small">PRODUTOS DISPONÍVEIS</Text>
        </Text>
      </Title>

      <Container>
        {products.map((product) => {
          return (
            <Card key={product.id}>
              <>
                {console.log(product.image)}
                <Image
                  onClick={handleModalOpen}
                  src={(`assets/images/${product.image}.png`)}
                  alt="image"
                ></Image>
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
    </>
  );
}
