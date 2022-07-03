import React from "react";
import { ButtonFormat, TextButton } from "./styles";

export const ButtonBack = () => {
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
