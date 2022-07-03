import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Touchable, Title } from "./styles";

export const MenuIcon = (props) => {
  return (
    <Touchable onPress={props.onPress}>
      <Ionicons name={props.iconName} size={60} color="orange" />
      <Title>{props.name}</Title>
    </Touchable>
  );
};

export default MenuIcon;
