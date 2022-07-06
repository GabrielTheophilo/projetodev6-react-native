import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

const ProductModal = ({
  nome,
  descricao,
  preco,
  qtdEstoque,
  foto,
  onPress,
}) => {
  return (
    <Container style={styles.container}>
      <Header />
      <Content>
        <Image source={foto} style={styles.img} />
        <View style={styles.mainContainer}>
          <View style={styles.containerDscrpt}>
            <Text style={styles.txtTitle}>Nome: {nome} </Text>
          </View>
          <View style={styles.containerDscrpt}>
            <Text style={styles.txtTitle}>Descrição: {descricao}</Text>
          </View>
          <View style={styles.containerDscrpt}>
            <Text style={styles.txtTitle}>Preço: {preco} R$</Text>
          </View>
          <View style={styles.containerDscrpt}>
            <Text style={styles.txtTitle}>Estoque: {qtdEstoque} unidades</Text>
          </View>
        </View>
        <Button name="voltar" onPress={onPress}/>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
  containerDscrpt: {
    flexDirection: "row",
    margin: 10,
  },
  txtTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  img: {
    width: "100%",
    height: 320,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default ProductModal;
