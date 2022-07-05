import React from "react";
import { Container, Content, Greeting, Imagem, Text } from "./styles";
import {
  useFonts,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";

export const Header = (props) => {
  useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
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
