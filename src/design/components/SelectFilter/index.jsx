
import { Select } from "./styles";

const SelectFilter = (props) => {
  

  return (
    <Select onChange={props.onChange}>{props.children}</Select>
  );
}
export default SelectFilter;
