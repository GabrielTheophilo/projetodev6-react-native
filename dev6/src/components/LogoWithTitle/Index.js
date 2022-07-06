import React from "react";
import { Container, Imagem, Title } from "./styles";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

const LogoWithTitle = (props) => {
  useFonts({
    Poppins_700Bold,
  });
  return (
    <Container>
      <Imagem source={require("../../../assets/icon.png")} />
      <Title>{props.title}</Title>
    </Container>
  );
};

export default LogoWithTitle;
