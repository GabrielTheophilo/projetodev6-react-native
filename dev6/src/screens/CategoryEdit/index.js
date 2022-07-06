import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import UserImage from "../../components/UserImage";
import {TextInput} from "react-native";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import { postCategoria } from "../../services/category";
import {useState} from "react";



const UserEdit = () => {
    const [categoriaNome, setCategoriaNome] = useState("");
    const [categoriaFoto, setCategoriaFoto] = useState("");

    const novaCategoria = {
        id: 123,
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
        <LogoWithTitle title="editar categoria" />
       
        <TextInput placeholder="foto"  value={categoriaFoto} onChangeText={setCategoriaFoto}/>
        <TextInput placeholder="nome"  value={categoriaNome} onChangeText={setCategoriaNome}/>
        
        <Button name="salvar" onPress={HandlePost} />
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};

export default UserEdit;