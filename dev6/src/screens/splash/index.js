import React, { useEffect, useRef } from "react";
import { Text, Button, Pressable } from "react-native";
import { FadeInView } from "../../components/animation";
import { Logo,Subtitle,LoadingContainer, Container, Image, TextInput, FadeContainer } from './styles';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { PageLoading } from "../../components/pageLoading";
import { useNavigation } from "@react-navigation/native";
import { NativeStackView } from "@react-navigation/native-stack";




export const Splash = () => {
  const nav = useNavigation();

  function homeScreen() {
    nav.navigate("Login");
  }
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
       <Pressable onPress={homeScreen}>
      <Logo source={require("../../../assets/img/fundo.png")} />
      <FadeInView>
        <Image source={require("../../../assets/icon.png")} />
        <TextInput>Dev-6</TextInput>
        
        <FadeContainer>
          
          <Subtitle/>
        </FadeContainer>
      </FadeInView>
      </Pressable>
    </Container>
      
  );}
};

export default Splash;
