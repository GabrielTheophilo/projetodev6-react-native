import React from "react";
import { ButtonFormat } from "./styles";
import { TextButton } from "./styles";

export const ButtonBack = (props) => {

  function handleGoBack() {
    console.log('pressed handleGoBack');
  }

  return (
    <ButtonFormat onPress={() => handleGoBack()}>
      <TextButton>voltar</TextButton>
    </ButtonFormat>
  );
};

export default ButtonBack;