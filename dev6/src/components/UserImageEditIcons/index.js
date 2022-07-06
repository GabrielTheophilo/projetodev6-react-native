import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

const UserImageEditIcons = (photo) => {

  return (
    <View style={styles.container}>
      {photo ? (
        <View style={{flexDirection: "row", alignItems: "center"}}>
        <Image style={styles.photo} source={photo} />
        <View>
            <TouchableOpacity
              onPress={() => {
                onPress;
              }}
            >
              <Ionicons name="trash" size={26} color="#ff7800" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPress;
              }}
            >
              <Ionicons name="ios-pencil" size={26} color="#ff7800" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <TouchableOpacity style={styles.photoContainer} disabled>
            <Ionicons name="md-download-outline" size={25} color="#797878" />
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              onPress={() => {
                onPress;
              }}
            >
              <Ionicons name="trash" size={26} color="#ff7800" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onPress;
              }}
            >
              <Ionicons name="ios-pencil" size={26} color="#ff7800" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default UserImageEditIcons;
