import React, { useEffect, useRef } from "react";
import { View, Text, Button, Animated } from "react-native";
import { Logo,Subtitle,Container, Image, TextInput, FadeContainer } from './styles';
import ClickToEnter from "../../components/clickToEnter";
import GoogleFontLoader from 'react-google-font-loader';
/*import {Navbar} from "../../components/navbar/index";*/

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
    /* <Navbar titulo="Navbar"></Navbar> */
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
        <Image source={require("../../../assets/icon.png")} />
        <TextInput>Dev-6</TextInput>
        <ClickToEnter text="Toque aqui para começar"></ClickToEnter>
        <FadeContainer>
          <Subtitle/>
        </FadeContainer>
      </FadeInView>
    </Container>
    
  );
};

export default Splash;