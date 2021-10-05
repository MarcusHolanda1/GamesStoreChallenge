import { ButtonStyle } from "./styles";
import { Text } from "../../Text";

const PrimaryButton = (props) => {
  return (
    <ButtonStyle {...props}>
      <Text>{props.children}</Text>
    </ButtonStyle>
  );
};
export default PrimaryButton;
