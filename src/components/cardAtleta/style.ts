import styled from "styled-components";

export const ContainerCardAtleta = styled.div`
  width: 300px;
  height: 200px;
  border: 1px solid #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  background: #fff;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  gap: 10px;
  margin: 5px;

  img {
    width: 100px;
    height: 100%;
    background-color: #ccc;
  }

  .dataAtleta {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 5px;
  }
`;
