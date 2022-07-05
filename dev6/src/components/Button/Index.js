import React from "react";
import { ButtonFormat, TextButton } from "./styles";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

const Button = (props) => {
  useFonts({
    Poppins_700Bold,
  });
  return (
    <ButtonFormat onPress={props.onPress}>
      <TextButton>{props.name}</TextButton>
    </ButtonFormat>
  );
};

export default Button;
