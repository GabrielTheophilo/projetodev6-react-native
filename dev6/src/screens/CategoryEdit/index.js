import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import UserImage from "../../components/UserImage";
import { TextInput } from "../../components/InputText/styles";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import InputText from "../../components/InputText";
import { useNavigation } from "@react-navigation/native";
import { getCategoriaById, putCategoria } from "../../services/category";
import {useState, useEffect} from "react";
import styled from "styled-components/native";

const StyledImage = styled.Image`
  margin-left: 40;
  width:200;
  height:200;
`;

const CategoryEdit = ({route}) => {
    const [categoriaNome, setCategoriaNome] = useState("");
    const [categoriaFoto, setCategoriaFoto] = useState("");
    
    const [categoriaId] = useState(route.params.id);
    
    const novaCategoria = {
        nome: categoriaNome,
        foto: categoriaFoto,
    }

    const HandlePost = () => {
        putCategoria(
            categoriaId ,novaCategoria
        ).then((response)=>{
          nav.goBack();
        })
    }

    const nav = useNavigation();
    function backScreen() {
       nav.goBack();
    }



    useEffect(() => {
      getCategoriaById(categoriaId).then((response) => {
        console.log(response);
        setCategoriaNome(response.nome);
        setCategoriaFoto(response.foto);
      });
    }, []);
    
        

  return (
    <Container>
      <Content>
        <LogoWithTitle title="Editar categoria" />
        <StyledImage source={ categoriaFoto ? { uri:categoriaFoto } : null }></StyledImage>
        <InputText placeholder="foto"  value={categoriaFoto} onChangeText={setCategoriaFoto}/>
        <InputText placeholder="nome"  value={categoriaNome} onChangeText={setCategoriaNome}/>
        
        <Button name="salvar" onPress={HandlePost} />
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};

export default CategoryEdit;