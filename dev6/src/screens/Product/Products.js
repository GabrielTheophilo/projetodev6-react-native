import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Products = (props) => {
  return (
    <View style={styles.containerFunction}>
      <Text style={styles.txt}>Produto: {props.data.nome} </Text>
      <Text style={styles.txt}>Descrição: {props.data.descricao} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
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

export default Products;
