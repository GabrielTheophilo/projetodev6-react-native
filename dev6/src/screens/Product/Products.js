import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Products = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.data.foto} style={styles.img} />
      <Text style={styles.titleProduct}>Produto: {props.data.nome} </Text>
      {/* <Text style={styles.txt}>Descrição: {props.data.descricao} </Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "80%",
    width: "80%",
    padding: "2%",
    margin: 30,
    justifyContent: "center",
  },
  titleProduct: {
    fontSize: 20,
    fontWeight: "900",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: 320,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default Products;
