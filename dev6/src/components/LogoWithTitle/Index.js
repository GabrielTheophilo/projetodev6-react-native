import React from "react";
import { Container, Imagem, Title } from "./styles";

export const LogoWithTitle = (props) => {
  return (
    <Container>
      <Imagem source={require("../../../assets/icon.png")} />
      <Title>{props.title}</Title>
    </Container>
  );
};

export default LogoWithTitle;
