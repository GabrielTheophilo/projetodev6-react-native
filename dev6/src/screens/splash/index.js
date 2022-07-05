import React, { useEffect, useRef } from "react";
import { FadeInView } from "../../components/animation";
import { Logo,Subtitle,Container, Image, TextInput, FadeContainer } from './styles';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';



export const Splash = () => {
  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  
  return (
   
    <Container>    
     

      <Logo source={require("../../../assets/img/fundo.png")} />
      
      <FadeInView>
        <Image source={require("../../../assets/icon.png")} />
        <TextInput>Dev-6</TextInput>
        
        <FadeContainer>
          <Subtitle/>
        </FadeContainer>
      </FadeInView>
      
    </Container>
    
  );
};

export default Splash;
