import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, FlatList } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import { Title, Touchable } from "./styles";
import Products from "./Products";
import Api from "../../services/api";
import ButtonBack from "../../components/ButtonBack";
import { getProduct, postProduct } from "../../services/product";

const Product = (props) => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    getProduct().then((data) => {
      setFeed(data);
    });
  }, []);

  const onAddNewProduct = () => {
    postProduct({
      categoriaId: null,
      descricao: "aaaaa",
      foto: "https://i.pinimg.com/564x/e6/50/1f/e6501f372bd31c4ecf57de93cc1304b6.jpg",
      nome: "wallpaper nft",
      id: 2,
      preco: 999999,
      qtdEstoque: 1,
    });
  };
  return (
    <Container>
      <Header />
      <Content>
        <View style={styles.containerRow}>
          <Title>Produtos</Title>
          <Touchable onPress={onAddNewProduct}>
            <Ionicons name="add" size={26} color="orange" />
          </Touchable>
        </View>
        <FlatList
          data={feed}
          renderItem={({ item }) => <Products data={item} />}
        />
        <ButtonBack />
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
