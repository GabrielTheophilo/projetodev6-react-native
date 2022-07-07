import React, { useState } from "react";
import { View, Text, Image, Modal, StyleSheet } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CusttomButton, ContainerBtnOptions, ContainerDscrpt, txtTitle } from "./styles";
import EditModal from "./EditModal";
import api from "../../services/api";

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

  function openModalEdit() {
    setVisibleModalEdit(true);
  }

  function handleDelete(idDelete) {
    api.delete(
      `https://reactnative.herokuapp.com/reactnative/produto/${idDelete}`
    );
  }



  return (
    <Container >
      <Header />

      <Content>
        <Image source={foto} style={styles.img} />

        <View style={styles.mainContainer}>
          <View style={styles.containerDscrpt}>
            <Text style={styles.txtTitle}>Nome: {nome} </Text>
          </View>

          <View style={styles.containerDscrpt}>
            <Text style={styles.txtTitle}>ID: {id} </Text>
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

        <ContainerBtnOptions>
          <CusttomButton onPress={() => handleDelete(id)}>
            <Ionicons name="trash" size={30} color="#ff7800" />
          </CusttomButton>

          <CusttomButton onPress={openModalEdit}>
            <Ionicons name="ios-pencil" size={30} color="#ff7800" />
          </CusttomButton>

          <CusttomButton onPress={onPress}>
            <Ionicons name="arrow-back-outline" size={30} color="#ff7800" />
          </CusttomButton>
        </ContainerBtnOptions>
        <Modal animationType="fade" visible={visibleModalEdit}>
          {" "}
          <EditModal foto={foto} />{" "}
        </Modal>
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
    margin: "2%",
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
