import { ButtonStyle } from "./styles";
import { Text } from "../../Text";

const SecondaryButton = (props) => {
  return (
    <ButtonStyle {...props}>
      <Text>{props.children}</Text>
    </ButtonStyle>
  );
};
export default SecondaryButton;
