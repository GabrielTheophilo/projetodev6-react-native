import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const UserImage = (photo) => {
  return (
    <View style={styles.container}>
      {photo ? (
        <Image style={styles.photo} source={{ uri: photo }} />
      ) : (
        <TouchableOpacity style={styles.photoContainer} disabled>
          <Ionicons name="md-download-outline" size={25} color="#797878" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserImage;
