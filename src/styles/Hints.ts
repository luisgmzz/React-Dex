import styled from "styled-components";

export const StyledHintsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`

export const StyledHint = styled.li`
  display: inline;
  margin: 10px;
  padding: 10px;
  background-color: beige;
  border: 1px solid #444;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;
