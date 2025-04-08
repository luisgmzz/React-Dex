import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
`;

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
      
      a {
        color: #ffde00;
        -webkit-text-stroke: .15vw #3b4cca;
        font-family: "Pokemon Solid", sans-serif;
        letter-spacing: 0px;
        font-size: 2vw;
        font-weight: 500;
        @media (max-width: 500px) {
          font-size: 25px;
          -webkit-text-stroke: 1.75px #3b4cca;
        }
      }

    }
  }
`;

export const StyledFooter = styled.footer`
  background-color: #f00000;
  margin-top: 3vh;

  p {
    font-family: "Pokemon Solid", sans-serif;
    
    color: #ffde00;
    -webkit-text-stroke: .15vw #3b4cca;
    
    font-size: 2vw;
    font-weight: 500;
    
    text-align: center;

    @media (max-width: 500px) {
          font-size: 25px;
          -webkit-text-stroke: 1.75px #3b4cca;
        }
  }
`