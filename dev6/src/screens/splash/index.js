import React, { useEffect, useRef } from "react";
import { Text } from "react-native";
import { FadeInView } from "../../components/animation";
import { Logo,Subtitle,LoadingContainer, Container, Image, TextInput, FadeContainer } from './styles';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { PageLoading } from "../../components/pageLoading";


export const Splash = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return (
      <LoadingContainer>
        <PageLoading />
      </LoadingContainer>
    )
  }else {
  return (
   
    <Container>    
      <Logo source={require("../../../assets/img/fundo.png")} />
      <FadeInView>
        <Image source={require("../../../assets/icon.png")} />
        <Text><TextInput>Dev-6</TextInput></Text>
        <FadeContainer>
          <Subtitle/>
        </FadeContainer>
      </FadeInView>
    </Container>
      
  );}
};

export default Splash;
