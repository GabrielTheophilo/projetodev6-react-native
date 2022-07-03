import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, Touchable, Title } from "./styles";

export const TitleScreen = (props) => {
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
