import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CusttomButton } from "./styles";

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

        <View style={styles.containerBtnOptions}>
          <CusttomButton>
            <Ionicons name="trash" size={35} color="#ff7800" />
          </CusttomButton>

          <CusttomButton>
            <Ionicons name="ios-pencil" size={35} color="#ff7800" />
          </CusttomButton>

          <CusttomButton>
            <Ionicons name="arrow-back-outline" size={35} color="#ff7800" />
          </CusttomButton>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerBtnOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: "5%",
  },
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
