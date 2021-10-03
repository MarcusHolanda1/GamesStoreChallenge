import { ContainerModal, Image, Star, AlignButtonClose } from "./styles";

import Card from "../Card";
import { Text } from "../Text";
import PrimaryButton from "../Button/PrimaryButton";
import CloseButton from "../Button/CloseButton";

import ImageGame from "../../../assets/images/callOfDutWWI.png";

const ModalBuy = (props) => {

  
  return (
    <ContainerModal>
      <Card>
        <AlignButtonClose><CloseButton></CloseButton></AlignButtonClose>
        
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
  );
};
export default ModalBuy;
