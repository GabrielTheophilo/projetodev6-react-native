import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import InputText from "../../components/InputText/Index";
import { Container, Content } from "../../components/GlobalStyles/styles";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import { putProduct } from "../../services/product";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const EditModal = (props) => {
  const [url, setUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productValue, setProductValue] = useState("");
  const [quantity, setQuantity] = useState("");

  const newProduct = {
    categoriaId: null,
    descricao: description,
    foto: url,
    preco: productValue,
    qtdEstoque: quantity,
    nome: productName,
  };

  function HandlePut() {
    putProduct(props.id, newProduct).then((response) => {
      console.log(props.id);
    });
    console.log(newProduct);
  }

  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }

  return (
    <Container>
      <Header name="Admin" />
      <Content>
        <Image source={props.foto} style={styles.img} />
        <InputText
          placeholder="Nova url do produto"
          value={url}
          onChangeText={setUrl}
        />
        <InputText
          placeholder="Digite o novo nome do produto"
          value={productName}
          onChangeText={setProductName}
        />
        <InputText
          placeholder="Digite a nova descrição do produto"
          value={description}
          onChangeText={setDescription}
        />
        <InputText
          placeholder="Digite o novo valor do produto"
          value={productValue}
          onChangeText={setProductValue}
        />
        <InputText
          placeholder="Nova quantidade em estoque do produto"
          value={quantity}
          onChangeText={setQuantity}
        />
        <Button name="Enviar edição" onPress={HandlePut} />
        <ButtonBack onPress={backScreen} />
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

export default EditModal;
