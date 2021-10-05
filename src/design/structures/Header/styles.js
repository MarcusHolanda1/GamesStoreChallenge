import styled from "styled-components";
import Theme from "../../theme";


export const Nav = styled.header`
  position: fixed;
  height: 60px;
  min-width: 100%;
  height: 60px;
  padding-right: 15px;
  background-color: ${Theme.colors.white};
  border-bottom: 2px solid ${Theme.colors.border};

`;

export const TitleHeader = styled.img`
  padding: 20px 0 0 30px;
  cursor: pointer;
`;