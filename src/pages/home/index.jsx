import React, {useState, useEffect} from 'react'

import Header from "../../design/structures/Header";
import Title from "../../design/components/Title";
import SelectFilter from "../../design/components/SelectFilter";
import Card from "../../design/components/Card";
import { Text } from "../../design/components/Text";
import PrimaryButton from "../../design/components/Button/PrimaryButton";
import ButtonCart from "../../design/components/Button/ButtonCart";
import CloseButton from "../../design/components/Button/CloseButton";
import CardModal from '../../design/components/Card/CardModal'

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


  const [games, setGames] = useState([]);

  useEffect(() => {
        fetch('./products.json',{
          headers: {
            Accept: 'application/json'
          }
        }).then(res => res.json())
          .then(res => setGames(res))
      },[]) 
console.log(games)

  function onFilterChange(event) {
    const option = event.target.selectedOptions[0];
    const field = option.value;
    const isASC = option.dataset.filter === 'ASC';
    const isNumberField = ['price', 'score'].includes(field);

    const sortedGames = [...games].sort(function (a, b) {
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

    setGames(sortedGames);
  }




  return (
    
   <>
    <div
        hidden={!show}  
      >
       <ContainerModal>
        <CardModal>
          <AlignButtonClose onClick={() => handleModalClose('/repos')}>
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
          
        </CardModal>
      </ContainerModal> 
      </div>

      <Header>
        <ButtonCart>
          <span>1</span>
        </ButtonCart>
      </Header>

      {/* <SelectFilter></SelectFilter> */}

      
      <SelectFilter onChange={onFilterChange}>
        <option data-filter='ASC' value='name'>
          Name (A-Z)
        </option>
        <option data-filter='DESC' value='name'>
          Name (Z-A)
        </option>
        <option data-filter='ASC' value='price'>
          Price (-/+)
        </option>
        <option data-filter='DESC' value='price'>
          Price (+/-)
        </option>
        <option data-filter='ASC' value='score'>
          Score (-/+)
        </option>
        <option data-filter='DESC' value='score'>
          Score (+/-)
        </option>
      </SelectFilter>


    


      <Title>
        <Text type="text">
          <Text type="h3">Jogos</Text>
          <Text type="small">PRODUTOS DISPONÍVEIS</Text>
        </Text>
      </Title>


      <Container>
      
      {games.map((game, key) => {
           return (
             <Card key={key}>
          <>
          <Image onClick={handleModalOpen} src={game.image} alt=""></Image>
          <Text type="text">
            <Text type="h5Transparent">PLAYSTATION</Text>
          </Text>
          <Text type="text">
            <Text type="p">{game.name}</Text>
          </Text>
          <Text type="text">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Text type="small">({game.score})</Text>
          </Text>

          <Text type="text">
            <Text type="h4buy">R$ {game.price}</Text>
          </Text>
        </>  </Card>
           )
         })}
        

      </Container>
    </>
   );
   
}