import React from "react";
import { ButtonFormat, TextButton } from "./styles";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export const ButtonBack = () => {
  useFonts({
    Poppins_500Medium,
  });

  function handleGoBack() {
    console.log("pressed handleGoBack");
  }

  return (
    <ButtonFormat onPress={() => handleGoBack()}>
      <TextButton>voltar</TextButton>
    </ButtonFormat>
  );
};

export default ButtonBack;
