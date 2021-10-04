import { ContainerModal, DivCard } from "./styles";

const Modal = (props) => {
  return <ContainerModal {...props}><DivCard>{props.children}</DivCard></ContainerModal>;
};
export default Modal;
