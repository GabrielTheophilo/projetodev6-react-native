import React from "react";
import { StyleSheet, Image, Text } from "react-native";
import InputText from "../../components/InputText/Index";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Api from "../../services/api";
import { CusttomButton } from "./styles";

const EditModal = ({ foto }) => {
  function HandlePut() {
    console.log('oi')
  }
  return (
    <Container>
      <Content>
        <Image source={foto} style={styles.img} />
        <InputText placeholder="Nova url do produto"></InputText>
        <InputText placeholder="Digite o novo nome do produto"></InputText>
        <InputText placeholder="Digite a nova descrição do produto"></InputText>
        <InputText placeholder="Digite o novo valor do produto"></InputText>
        <InputText placeholder="Nova quantidade em estoque do produto"></InputText>
      </Content>
      <CusttomButton onPress={HandlePut}>
        <Text> teste </Text>
      </CusttomButton>
    </Container>
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

export default EditModal;
