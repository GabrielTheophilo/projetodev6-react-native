import React from "react";
import { View} from "react-native";
import { Logo,Container, Image } from './styles';

export const Splash = () => {
  return (
  <View >
    <Container>    
    <Logo source={require("../../../assets/img/logo.png")}>
    </Logo>
    </Container>
    </View>
  );
};

export default Splash;