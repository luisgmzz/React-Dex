import styled from "styled-components";
import typeColors from "../constants/typeColors";

export const StyledTypesList = styled.ul`
  list-style-type: none;
`;

export const StyledType = styled.li`
  display: inline;
  font-size: 25px;
  color: white;
  -webkit-text-stroke: 0.5px grey;
  margin: 20px;
  padding: 5px 20px;

  border: 2.5px solid grey;
  border-radius: 10px;
  background-color: ${({ children }) =>
    typeColors[(children as string).toLowerCase() as Type]};
`;
