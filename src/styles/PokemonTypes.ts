import styled from "styled-components";
import typeColors from "../constants/typeColors.json";

const color = "#A0A978";
export const StyledType = styled.li`
  color: ${({ children }) =>
    typeColors[(children as string).toLowerCase() as Type]};
  font-weight: bold;
`;
