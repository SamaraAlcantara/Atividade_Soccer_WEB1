import styled from "styled-components";
type ButtonProps = {
  color?: string; // cor de fundo opcional
};

export const SearchButton = styled.button<ButtonProps>`
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) => props.color || "#007bff"};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.7;
  }
`;
