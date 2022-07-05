import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import { Title, Touchable } from "./styles";
import Products from "./Products";

const Product = (props) => {
  const [feed, setFeed] = useState([]);
  return (
    <Container>
      <Header />
      <Content>
        <View style={styles.containerRow}>
          <Title>Produtos</Title>
          <Touchable onPress={props.onPress}>
            <Ionicons name="add" size={26} color="orange" />
          </Touchable>
        </View>
        <FlatList
          data={feed}
          renderItem={({ item }) => <Products data={item} />}
        />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
  },
});

export default Product;
