import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #ff7800;
  border-bottom-left-radius: 30px;
  height: 10%;
  width: 100%;
`;

export const Greeting = styled.Text`
  font-size: 14px;
  color: #000;
  align-self: flex-end;
  padding: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: white;
  align-self: flex-end;
  padding: 10px;
  margin-left: -120px;
  font-family: "Poppins_700Bold";
`;

export const Imagem = styled.Image`
  width: 25;
  height: 25;
  z-index: -1;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  margin-left: 10px;
  margin-right: 10px;
  align-items: center;
`;
