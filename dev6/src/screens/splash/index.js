import React, { useEffect, useRef } from "react";
import { View, Text, Button, Animated } from "react-native";
import { Logo,Subtitulo,Container, Imagem, TextoInput, FadeContainer } from './styles';
import GoogleFontLoader from 'react-google-font-loader';


const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 10000,
      }
    ).start();
  }, [fadeAnim])
  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}


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

      <Logo source={require("../../../assets/img/fundo.png")} />
    
      <FadeInView>
        <Imagem source={require("../../../assets/icon.png")} />
        <TextoInput>Dev-6</TextoInput>
        <FadeContainer>
          <Subtitulo/>
        </FadeContainer>
      </FadeInView>
    </Container>
    
  );
};

export default Splash;