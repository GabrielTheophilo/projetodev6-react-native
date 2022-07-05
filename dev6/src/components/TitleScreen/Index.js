import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, Touchable, Title } from "./styles";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

const TitleScreen = (props) => {
  useFonts({
    Poppins_700Bold,
  });
  return (
    <Container>
      <Title>{props.title}</Title>
      {props.icon ? (
        <Touchable onPress={props.onPress}>
          <Ionicons name="add" size={26} color="orange" />
        </Touchable>
      ) : null}
    </Container>
  );
};

export default TitleScreen;
