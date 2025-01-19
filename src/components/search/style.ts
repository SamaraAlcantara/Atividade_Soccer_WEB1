import styled from "styled-components";
//ESTILIZANDO BOTÃO SEARCH
export const SearchInput = styled.input`
  width: 300px;
  padding: 10px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;
  margin: 0 10px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
