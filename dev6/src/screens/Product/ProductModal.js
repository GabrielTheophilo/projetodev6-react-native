import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import { CusttomButton } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProductModal = ({
  nome,
  descricao,
  preco,
  qtdEstoque,
  foto,
  onPress,
  id,
}) => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(false);
  // const [visibleModalDelete, setVisibleModalDelete] = useState(false);

  function openModalEdit() {
    setVisibleModalEdit(true);
  }

  function closeModalEdit() {
    setVisibleModalEdit(false);
  }


  // function openModalDelete() {
  //   setVisibleModalDelete(true);
  // }

  // function closeModalDelete() {
  //   setVisibleModalDelete(false);
  // }

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
            <Text style={styles.txtTitle}>id: {id}</Text>
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
        <View style={styles.optionContainer}>
          <CusttomButton >
            <Ionicons name="trash" size={30} color="#ff7800" />
          </CusttomButton>
          <CusttomButton onPress={openModalEdit}>
            <Ionicons name="ios-pencil" size={30} color="#ff7800" />
          </CusttomButton>
          <CusttomButton onPress={onPress}>
            <Ionicons name="arrow-back-outline" size={30} color="#ff7800" />
          </CusttomButton>
        </View>
        <Modal visible={visibleModalEdit} animationType="fade"></Modal>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    width: "60%",
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  mainContainer: {
    flexDirection: "column",
  },
  containerDscrpt: {
    margin: 10,
    flexDirection: "row",
  },
  txtTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  img: {
    width: "100%",
    height: 320,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: "center",
  },
});

export default ProductModal;
