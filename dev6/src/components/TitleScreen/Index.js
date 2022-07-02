import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, Touchable } from "./styles";
import { Content } from "./styles";
import { Title } from "./styles";

export const TitleScreen = (props) => {
  return (
    <Container>
      <Content>
        <Title>{props.title}</Title>
        {props.icon ? (
          <Touchable onPress={props.onPress}>
            <Ionicons name="add" size={26} color="orange" />
          </Touchable>
        ) : null}
      </Content>
    </Container>
  );
};

export default TitleScreen;
