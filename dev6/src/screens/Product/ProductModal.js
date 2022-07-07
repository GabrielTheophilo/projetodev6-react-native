import React, { useState } from "react";
import { Image, Modal, StyleSheet } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  MainContainer,
  CusttomButton,
  ContainerBtnOptions,
  ContainerDscrpt,
  TxtDscrpt,
} from "./styles";
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

  function closeModalEdit() {
    setVisibleModalEdit(false);
  }

  async function handleDelete(idDelete) {
    await api.delete(
      `https://reactnative.herokuapp.com/reactnative/produto/${idDelete}`
    );
  }

  return (
    <Container>
      <Header />

      <Content>
        <Image source={foto} style={styles.img} />

        <MainContainer>
          <ContainerDscrpt>
            <TxtDscrpt>Nome: {nome} </TxtDscrpt>
          </ContainerDscrpt>

          <ContainerDscrpt>
            <TxtDscrpt>ID: {id} </TxtDscrpt>
          </ContainerDscrpt>

          <ContainerDscrpt>
            <TxtDscrpt>Descrição: {descricao}</TxtDscrpt>
          </ContainerDscrpt>

          <ContainerDscrpt>
            <TxtDscrpt>Preço: {preco} R$</TxtDscrpt>
          </ContainerDscrpt>

          <ContainerDscrpt>
            <TxtDscrpt>Estoque: {qtdEstoque} unidades</TxtDscrpt>
          </ContainerDscrpt>
        </MainContainer>

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
          <EditModal foto={foto} onPress={closeModalEdit} />{" "}
        </Modal>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 320,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default ProductModal;
