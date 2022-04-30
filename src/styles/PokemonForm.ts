import styled from "styled-components";

const pokeballColor = "#f00000";

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  input {
    width: 400px;
  }
  button {
    flex-grow: 0;
  }
`;

export const StyledInput = styled.input`
  margin: 20px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: ${pokeballColor};
    outline: 0;
    box-shadow: 0 0 3px 0.1rem ${pokeballColor};
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  outline: 0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${pokeballColor};
  border-color: ${pokeballColor};
  :hover {
    color: #fff;
    background-color: ${pokeballColor};
  }
`;
