import React from "react";
import { Container } from "./styles";
import { Content } from "./styles";
import { Imagem } from "./styles";
import { Title } from "./styles";

export const LogoWithTitle = (props) => {
    return (
      <Container>
        <Content>
        <Imagem source={require("../../../assets/icon.png")} />
        <Title>{props.title}</Title>
        </Content>
      </Container>
    );
  };
  
export default LogoWithTitle;