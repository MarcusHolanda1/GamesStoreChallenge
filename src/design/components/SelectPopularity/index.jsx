import { DivSelect, Select } from "./styles";

const SelectPopularity = (props) => {
  return (
    <DivSelect>
      <Select>
      <option
    >FILTRAR</option>
        <option value="1">POPULARIDADE</option>
        <option value="2">ORDEM ALFABÉTICA</option>

      </Select>
    </DivSelect>
  );
};
export default SelectPopularity;
