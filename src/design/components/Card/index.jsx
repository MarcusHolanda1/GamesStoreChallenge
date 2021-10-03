import { DivCard, CardButton } from "./styles";

import React, {useState} from 'react'


const Card = (props) => {
  const [ModalisVisible, setModalIsVisible] = useState(false)

  return (
    // <DivCard>
    //   <CardButton  onClick={()=> setModalIsVisible(true)}>{props.children}</CardButton>
    //   {ModalisVisible ? <h1>Deu bom</h1> : null}
    // </DivCard>
    
    <DivCard>
      <CardButton >{props.children}</CardButton>
    </DivCard>
  );
};
export default Card;
