import { DivCard } from "./styles";

const Card = (props) => {
  return <DivCard {...props}>{props.children}</DivCard>;
};
export default Card;
