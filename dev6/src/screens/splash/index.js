import React, { useEffect, useRef } from "react";
import { Text, Button, Pressable } from "react-native";
import { FadeInView } from "../../components/Animation";
import {
  Logo,
  Subtitle,
  LoadingContainer,
  Container,
  Image,
  TextInput,
  FadeContainer,
} from "./styles";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { PageLoading } from "../../components/PageLoading";
import { useNavigation } from "@react-navigation/native";
import { AnimatedTransition } from "../../components/Animation";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(function () {
      navigation.navigate("Login");
    }, 4000);
  });

  let [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    return (
      <LoadingContainer>
        <PageLoading />
      </LoadingContainer>
    );
  } else {
    return (
      <Container>
        
        <Logo source={require("../../../assets/img/fundo.png")} />
        <FadeInView>
          <Image source={require("../../../assets/icon.png")} />
          <TextInput>Dev-6</TextInput>

          <FadeContainer>
            <Subtitle />
          </FadeContainer>
        </FadeInView>
        
      </Container>
    );
  }
};

export default Splash;
