import React from "react";
import { StyleSheet, Image } from "react-native";
import InputText from "../../components/InputText/Index";
import { Container, Content } from "../../components/GlobalStyles/styles";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";

const EditModal = (props) => {
  function HandlePut() {
    console.log('oi')
  }
  return (
    <Container>
      <Content>
        <Image source={props.foto} style={styles.img} />
        <InputText placeholder="Nova url do produto" />
        <InputText placeholder="Digite o novo nome do produto" />
        <InputText placeholder="Digite a nova descrição do produto" />
        <InputText placeholder="Digite o novo valor do produto" />
        <InputText placeholder="Nova quantidade em estoque do produto" />
        <Button name="Enviar edição" />
        <ButtonBack onPress={props.onPress} />
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
