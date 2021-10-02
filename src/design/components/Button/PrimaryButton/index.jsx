import { ButtonStyle } from "./styles";
import { Text } from "../../Text";

const PrimaryButton = (props) => {
  return (
    <ButtonStyle>
      <Text>{props.children}</Text>
    </ButtonStyle>
  );
};
export default PrimaryButton;
