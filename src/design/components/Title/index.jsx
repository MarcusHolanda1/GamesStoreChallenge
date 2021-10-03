import { DivTitle } from "./styles";

import { Text } from "../../components/Text";

const Title = (props) => {
  return (
    <DivTitle>
      <Text>{props.children}</Text>
    </DivTitle>
  );
};
export default Title;
