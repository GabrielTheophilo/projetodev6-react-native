import React from "react";
import { TextInput } from "./styles";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const InputText = ({ placeholder }) => {
  useFonts({
    Poppins_400Regular,
  });
  return (
    <>
      <TextInput placeholder={placeholder} />
    </>
  );
};

export default InputText;
