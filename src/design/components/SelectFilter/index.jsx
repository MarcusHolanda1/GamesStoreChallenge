import { Select } from "./styles";

const SelectFilter = (props) => {
  return (
    <Select onChange={props.onChange}>
      {props.children}{" "}
      <option data-filter="ASC" value="name">
        FILTRAR
      </option>
      <option data-filter="ASC" value="name">
        Name (A-Z)
      </option>
      <option data-filter="DESC" value="name">
        Name (Z-A)
      </option>
      <option data-filter="ASC" value="price">
        Price (-/+)
      </option>
      <option data-filter="DESC" value="price">
        Price (+/-)
      </option>
      <option data-filter="ASC" value="score">
        Score (-/+)
      </option>
      <option data-filter="DESC" value="score">
        Score (+/-)
      </option>
    </Select>
  );
};
export default SelectFilter;
