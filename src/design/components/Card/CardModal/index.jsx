import { DivCard, CardButton } from "./styles";

const CardModal = (props) => {
  return <DivCard><CardButton>{props.children}</CardButton></DivCard>;
};
export default CardModal;
