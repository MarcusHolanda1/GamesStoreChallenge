import Header from "../../design/structures/Header";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import Button from "../../design/components/Button";
import ButtonCart from "../../design/components/ButtonCart";

import ImageGame from "../../assets/images/callOfDutWWI.png";

import { Container, Image, Star } from "./styles";

export default function Home() {
  return (
    <>
      <Header>
        <ButtonCart>
          <span>1</span>
        </ButtonCart>
      </Header>
      <SelectFilter></SelectFilter>
      <Title></Title>
      <Container>
        <Card>
          <Image src={ImageGame} alt=""></Image>
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
        <Button>
          <Text type="text">
            <Text type="buttonText">Adicione ao carrinho</Text>
          </Text>
        </Button>
      </Container>
    </>
  );
}
