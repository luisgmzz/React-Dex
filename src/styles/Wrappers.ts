import styled from "styled-components";

export const StyledHeader = styled.header`
  margin: 0;
  background-color: #f00000;

  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;

    li {
      display: inline;
      margin: 1em;
      font-size: 1.5em;
      font-weight: 500;

      a {
        color: #ffde00;
        -webkit-text-stroke: 1.9px #3b4cca;
        font-family: "Pokemon Solid", sans-serif;
        letter-spacing: 0px;
      }
    }
  }
`;
