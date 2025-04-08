import styled from "styled-components";
import typeColors from "../constants/typeColors";

export const StyledTypesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

export const StyledType = styled.li`
  list-style: none;
  flex: 1 1 45%;             // base: 45%, pero se puede achicar o crecer
  min-width: 100px;          // nunca será más estrecho que esto
  -webkit-text-stroke: 1px grey;
  border: 2.5px solid gray;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: center;
  padding: 12px 0;
  box-sizing: border-box;

  background-color: ${({ children }) =>
    typeColors[(children as string).toLowerCase() as Type]};

  @media (max-width: 500px) {
    flex: 1 1 100%;   /* En pantallas pequeñas, cada tipo ocupa toda la fila */
  }
`;
/*
  -webkit-text-stroke: 1px grey;


  display: inline-block;
  font-size: 1.2rem;
  width: calc(50% - 10px);   
  height: 40px;
  line-height: 40px;
  text-align: center;
  border: 2.5px solid gray;
  border-radius: 10px;
  font-weight: bold;
  color: white;
  margin-right: 10px;

  margin: 20px;
  padding: 5px 20px;




  background-color: ${({ children }) =>
    typeColors[(children as string).toLowerCase() as Type]};
  */