import React from "react";
import { View, Text } from "react-native";
import { Logo,Container, Imagem, TextoInput } from './styles';
import GoogleFontLoader from 'react-google-font-loader';

export const Splash = () => {
  return (
    
    <Container>    
      <GoogleFontLoader
      fonts={[
        {
          font: 'Poppins',
          weights: [600],
        },
        {
          font: 'Roboto Mono',
          weights: [400, 700],
        },
      ]}
    
    />
    <Logo source={require("../../../assets/img/fundo.png")}>
    
    </Logo>
    <Imagem source={require("../../../assets/icon.png")} />
    <TextoInput>Dev-6</TextoInput>
    </Container>
    
  );
};

export default Splash;