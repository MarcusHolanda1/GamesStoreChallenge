import Header from "../../design/structures/Header";
import ContainerGlobal from "../../design/structures/ContainerGlobal";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import Button from "../../design/components/Button";

import ImageGame from "../../assets/images/callOfDutWWI.png"

import {Image} from './styles'

export default function Home() {
  return (
    <>
      <Header />
      <SelectFilter></SelectFilter>
      <Title></Title>
      <ContainerGlobal>
        <Card>
          <Image src={ImageGame} alt=""></Image>
          <Text type="text">
            <Text type="h5Transparent">PLAYSTATION</Text>
          </Text>
          <Text type="text">
            <Text type="p">Call of Duty WWII</Text>
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
      </ContainerGlobal>
    </>
  );
}
