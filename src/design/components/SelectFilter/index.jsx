import { Select } from "./styles";

const SelectFilter = (props) => {
  return (
    <Select onChange={props.onChange}>
      {props.children}{" "}
      <option data-filter="ASC" value="name">
        FILTRAR
      </option>
      <option data-filter="ASC" value="name">
        Nome (A-Z)
      </option>
      <option data-filter="DESC" value="name">
        Nome (Z-A)
      </option>
      <option data-filter="ASC" value="price">
        Preço (-/+)
      </option>
      <option data-filter="DESC" value="price">
        Preço (+/-)
      </option>
      <option data-filter="ASC" value="score">
        Pontuação (-/+)
      </option>
      <option data-filter="DESC" value="score">
        Pontuação (+/-)
      </option>
    </Select>
  );
};
export default SelectFilter;
