import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const InputPassword = ({ placeholder }) => {
  useFonts({
    Poppins_400Regular,
  });

  const [input, setInput] = useState("");
  const [hidePass, setHidePass] = useState(false);

  const onPress = () => {
    setHidePass(!hidePass);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          value={input}
          onChangeText={(text) => setInput(text)}
          secureTextEntry={hidePass}
        />
        <TouchableOpacity style={styles.icon} onPress={onPress}>
          {hidePass ? (
            <Ionicons name="eye-off" size={26} color="#cdcdcd" />
          ) : (
            <Ionicons name="eye" size={26} color="#cdcdcd" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputPassword;
