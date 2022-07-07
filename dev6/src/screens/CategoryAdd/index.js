import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import UserImage from "../../components/UserImage";
import { TextInput } from "../../components/InputText/styles";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import { useNavigation } from "@react-navigation/native";
import { getCategoriaById, postCategoria } from "../../services/category";
import {useState,useEffect} from "react";
import styled from "styled-components/native"

const StyledImage = styled.Image`
margin-left: 50;  
width:200;
  height:200;
`;

const CategoryAdd = () => {
    const [categoriaNome, setCategoriaNome] = useState("");
    const [categoriaFoto, setCategoriaFoto] = useState("");
    

    const novaCategoria = {
        nome: categoriaNome,
        foto: categoriaFoto,
    }

    const HandlePost = () => {
        postCategoria(
            novaCategoria
        )
    }

    const nav = useNavigation();
    function backScreen() {
       nav.goBack();
    }
  return (
    <Container>
      <Content>
        <LogoWithTitle title="Adicionar categoria" />
        <StyledImage source={ categoriaFoto ? { uri:categoriaFoto } : null }></StyledImage>
        <InputText placeholder="foto"  value={categoriaFoto} onChangeText={setCategoriaFoto}/>
        <InputText placeholder="nome"  value={categoriaNome} onChangeText={setCategoriaNome}/>
        
        <Button name="salvar" onPress={HandlePost} />
        
      </Content>
      <ButtonBack onPress={backScreen} />
    </Container>
  );
};

export default CategoryAdd;