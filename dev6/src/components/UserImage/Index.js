import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";


export const UserImage = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.photoContainer} disabled>
      <Ionicons name="md-download-outline" size={30} color="#797878" />
      </TouchableOpacity>
    </View>
  );
};

export default UserImage;
