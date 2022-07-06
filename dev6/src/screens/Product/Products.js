import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal } from "react-native";
import ProductModal from "./ProductModal";
import Button from "../../components/Button";

const Products = (props) => {
  const [visbileModal, setVibleModal] = useState(false);

  function openModal() {
    setVibleModal(true);
  }
  function closeModal() {
    setVibleModal(false);
  }

  return (
    <View style={styles.container}>
      <Image source={props.data.foto} style={styles.img} />
      <Text style={styles.titleProduct}>Produto: {props.data.nome} </Text>
      <Button name="ver mais" onPress={openModal} />
      <Modal animationType="slide" visible={visbileModal}>
        <ProductModal
          id={props.data.id}
          foto={props.data.foto}
          nome={props.data.nome}
          descricao={props.data.descricao}
          preco={props.data.preco}
          qtdEstoque={props.data.qtdEstoque}
          onPress={closeModal}
        />
      </Modal>
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
    alignItems: "center",
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
