import styled from "styled-components";
import Theme from "../../theme";

export const Nav = styled.header`
  position: relative;
  width: 100%;
  height: 60px;
  background-color: ${Theme.colors.white};
  border-bottom: 2px solid ${Theme.colors.border};
  margin-bottom: 40px;
  padding: 0px 68px 0px 50px;
`;

export const TitleHeader = styled.img`
  padding: 20px 0 0 30px;
`;