import React, { useState } from "react";
import { Image, StyleSheet, Modal } from "react-native";
import ProductModal from "./ProductModal";
import Button from "../../components/Button";
import { TitleProduct, Container } from "./styles";

const Products = (props) => {
  const [visbileModal, setVibleModal] = useState(false);

  function openModal() {
    setVibleModal(true);
  }
  function closeModal() {
    setVibleModal(false);
  }

  return (
    <Container>
      <Image source={props.data.foto} style={styles.img} />
      <TitleProduct>Produto: {props.data.nome} </TitleProduct>
      <Button name="ver mais" onPress={openModal} />
      <Modal animationType="slide" visible={visbileModal}>
        <ProductModal
          foto={props.data.foto}
          nome={props.data.nome}
          descricao={props.data.descricao}
          preco={props.data.preco}
          qtdEstoque={props.data.qtdEstoque}
          onPress={closeModal}
          id={props.data.id}
        />
      </Modal>
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

export default Products;
