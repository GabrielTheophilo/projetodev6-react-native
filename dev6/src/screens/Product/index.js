import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import { Title, Touchable } from "./styles";

const Product = (props) => {
  const [productFeed, setProductfeed] = useState([
    {
      id: "1",
      nome: "produto 1",
      descricao: "bla bla bla",
    },
    {
      id: "2",
      nome: "produto 2",
      descricao: "bla bla bla",
    },
    {
      id: "3",
      nome: "produto 3",
      descricao: "bla bla bla",
    },
    {
      id: "4",
      nome: "produto 4",
      descricao: "bla bla bla",
    },
    {
      id: "5",
      nome: "produto 5",
      descricao: "bla bla bla",
    },
    {
      id: "6",
      nome: "produto 6",
      descricao: "bla bla bla",
    },
    {
      id: "7",
      nome: "produto 7",
      descricao: "bla bla bla",
    },
  ]);

  function Products(props) {
    return (
      <View style={styles.containerFunction}>
        <Text style={styles.txt}>Produto: {props.data.nome} </Text>
        <Text style={styles.txt}>Descrição :{props.data.descricao} </Text>
      </View>
    );
  }

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
          data={productFeed}
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
  containerFunction: {
    height: "80%",
    width: "80%",
    padding: "2%",
    margin: 30,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
  },
  txt: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Product;
