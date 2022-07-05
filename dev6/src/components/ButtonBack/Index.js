import React from "react";
import { ButtonFormat, TextButton } from "./styles";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export const ButtonBack = (props) => {
  useFonts({
    Poppins_500Medium,
  });

  return (
    <ButtonFormat onPress={props.onPress}>
      <TextButton>voltar</TextButton>
    </ButtonFormat>
  );
};

export default ButtonBack;
