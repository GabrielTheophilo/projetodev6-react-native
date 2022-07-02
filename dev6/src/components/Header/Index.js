import React from "react";
import { Container, Content, Greeting, Imagem, Text } from "./styles";

export const Header = (props) => {
  return (
    <Container>
      <Content>
        <Imagem source={require("../../../assets/icon.png")} />
        <Text>dev6</Text>
        <Greeting>Olá, {props.name}</Greeting>
      </Content>
    </Container>
  );
};

export default Header;
