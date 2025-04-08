import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledName = styled.h3`
  margin: 20px;
  padding-bottom: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;

  font-size: 3vw;
  font-family: "Pokemon Solid", sans-serif;
  letter-spacing: 3px;
  color: white;
  -webkit-text-stroke: 0.2px grey;

  background-color: ${({ color }) => color};
  border: 2.5px solid grey;
  border-radius: 10px;
`;

export const StyledImage = styled.img`
  cursor: pointer;
  margin-bottom: 50px;
  width: 17vw;

  background-color: #a1c9f0;
  border: 2px solid #50515a;
  border-radius: 5px;
`;
