import React, { useState } from "react";
import { Alert } from "react-native";
import InputText from "../../components/InputText/Index";
import { Container, Content } from "../../components/GlobalStyles/styles";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import { postProduct } from "../../services/product";
import Header from '../../components/Header'
import { useNavigation } from "@react-navigation/native";

const PostModal = (props) => {
  const [url, setUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [productValue, setProductValue] = useState("");
  const [quantity, setQuantity] = useState("");

  const newProduct = {
    foto: url,
    nome: productName,
    descricao: description,
    preco: productValue,
    qtdEstoque: quantity,
  };

  const AddNewProduct = async () => {
    if (
      newProduct.foto == "" ||
      newProduct.nome == "" ||
      newProduct.descricao == "" ||
      newProduct.preco == "" ||
      newProduct.qtdEstoque == ""
    ) {
      Alert.alert("PREENCHA TODOS OS CAMPOS");
      alert("PREENCHA TODOS OS CAMPOS");
    } else {
      await postProduct(newProduct);
      setUrl("");
      setDescription("");
      setProductName("");
      setProductValue("");
      setQuantity("");
      Alert.alert("PRODUTO ADICIONADO COM SUCESSO");
      alert("PRODUTO ADICIONADO COM SUCESSO");
    }
  };

  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }

  return (
    <Container>
       <Header name='Admin' />
      <Content>
        <InputText
          placeholder="URL do produto"
          value={url}
          onChangeText={setUrl}
        />
        <InputText
          placeholder="Nome do produto"
          value={productName}
          onChangeText={setProductName}
        />
        <InputText
          placeholder="Descrição do produto"
          value={description}
          onChangeText={setDescription}
        />
        <InputText
          placeholder="Valor do produto"
          value={productValue}
          onChangeText={setProductValue}
        />
        <InputText
          placeholder="Quantidade em estoque"
          value={quantity}
          onChangeText={setQuantity}
        />
        <Button name="salvar" onPress={AddNewProduct} />
        <ButtonBack onPress={backScreen}/>
      </Content>
    </Container>
  );
};
export default PostModal;
