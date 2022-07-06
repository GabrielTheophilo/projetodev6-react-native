import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import ProductModal from "./ProductModal";


const Products = (props) => {
  const [visbileModal, setVibleModal] = useState(false);

  function openModal() {
    setVibleModal(true);
  }

  return (
    <View style={styles.container}>
      <Image source={props.data.foto} style={styles.img} />
      <Text style={styles.titleProduct}>Produto: {props.data.nome} </Text>
      <TouchableOpacity style={styles.btnSeeMore} onPress={openModal}>
        <Text style={styles.txtBtn}>VER MAIS</Text>
      </TouchableOpacity>
      <Modal animationType="slide" visible={visbileModal}>
        <ProductModal
          foto={props.data.foto}
          nome={props.data.nome}
          descricao={props.data.descricao}
          preco={props.data.preco}
          qtdEstoque={props.data.qtdEstoque}
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
  btnSeeMore: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    width: "40%",
    padding: "2%",
    backgroundColor: "#000",
  },
  txtBtn: {
    fontSize: 15,
    fontWeight: "900",
    textAlign: "center",
    color: "#FF7800",
  },
});

export default Products;
