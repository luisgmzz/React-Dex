import styled from "styled-components";

export const StyledGuessedList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StyledGuessedLi = styled.li<{ correct: boolean }>`
  color: ${({ correct }) => (correct ? "green" : "red")};

  &:before {
    content: "${({ correct }) => (correct ? "✅" : "❌")}";
    margin: 0 1em;
  }
`;
