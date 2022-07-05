import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Touchable, Title } from "./styles";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export const MenuIcon = (props) => {
  useFonts({
    Poppins_700Bold,
  });
  return (
    <Touchable onPress={props.onPress}>
      <Ionicons name={props.iconName} size={60} color="orange" />
      <Title>{props.name}</Title>
    </Touchable>
  );
};

export default MenuIcon;
