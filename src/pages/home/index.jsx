import React, {useState} from 'react'

import Header from "../../design/structures/Header";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import ButtonCart from "../../design/components/Button/ButtonCart";
import ModalBuy from "../../design/components/ModalBuy";
import CloseButton from "../../design/components/Button/CloseButton";

import ImageGame from "../../assets/images/callOfDutWWI.png";

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
  

  return (
    <>
    <div
        hidden={!show}  
      >
       <ContainerModal onClick={handleModalClose}>
        <Card>
          <AlignButtonClose onClick={handleModalClose}>
            <CloseButton></CloseButton>
            
          </AlignButtonClose>
          <Image src={ImageGame} alt=""></Image>
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
              <Text type="buttonText">Adicione ao carrinho</Text>
            </Text>
          </PrimaryButton>
        </Card>
      </ContainerModal> 
      </div>

      <Header>
        <ButtonCart>
          <span>1</span>
        </ButtonCart>
      </Header>

      <SelectFilter></SelectFilter>

      <Title>
        <Text type="text">
          <Text type="h3">Jogos</Text>
          <Text type="small">PRODUTOS DISPONÍVEIS</Text>
        </Text>
      </Title>


      <Container>
        <Card>
          <Image onClick={handleModalOpen} src={ImageGame} alt=""></Image>
          <Text type="text">
            <Text type="h5Transparent">PLAYSTATION</Text>
          </Text>
          <Text type="text">
            <Text type="p">Call of Duty WWII</Text>
          </Text>
          <Text type="text">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Text type="small">(20)</Text>
          </Text>

          <Text type="text">
            <Text type="h4buy">R$ 79,90</Text>
          </Text>
        </Card>

      </Container>
    </>
  );
}
