import { DivCard, CardButton } from "./styles";

const Card = (props) => {
  return (
    <DivCard>
      <CardButton>{props.children}</CardButton>
    </DivCard>
  );
};
export default Card;
