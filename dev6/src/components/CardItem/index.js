import React from "react";
import {
  Text,
  Container,
  Image,
  Content,
  View,
  Content2,
  View2,
  TouchableOpacity,
} from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const CardItem = ({ item }) => {
  const { nome, foto } = item;

  return (
    <Container>
      <View2>
        <Content>
          <Image source={foto}></Image>
          <Text>{nome}</Text>
        </Content>
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
      </View2>
    </Container>
  );
};

export default CardItem;
