import React from "react";
import { ButtonFormat } from "./styles";
import { TextButton } from "./styles";

export const Button = (props) => {
  return (
    <ButtonFormat onPress={props.onPress}>
      <TextButton>{props.name}</TextButton>
    </ButtonFormat>
  );
};

export default Button;