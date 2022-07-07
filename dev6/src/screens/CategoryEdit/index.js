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
import { useState, useEffect } from "react";

const CategoryEdit = ({ route }) => {
  const [categoriaNome, setCategoriaNome] = useState("");
  const [categoriaFoto, setCategoriaFoto] = useState("");

  const [categoriaId] = useState(route.params.id);

  const novaCategoria = {
    nome: categoriaNome,
    foto: categoriaFoto,
  };

  const HandlePost = () => {
    putCategoria(categoriaId, novaCategoria).then((response) => {
      nav.goBack();
    });
  };

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
      <ContentRegistration>
        <LogoWithTitle title="editar usuário" />
      </ContentRegistration>
      <Content>
        <InputText
          placeholder="foto"
          value={usuarioFoto}
          onChangeText={setUsuarioFoto}
        />
        <InputText
          placeholder="nome"
          value={usuarioNome}
          onChangeText={setUsuarioNome}
        />
        <InputText
          placeholder="cpf"
          value={usuarioCpf}
          onChangeText={setUsuarioCpf}
        />
        <InputText
          placeholder="data de nascimento"
          value={usuarioDtNascimento}
          onChangeText={setUsuarioDtNascimento}
        />
        <InputText
          placeholder="login"
          value={usuarioLogin}
          onChangeText={setUsuarioLogin}
        />
        <InputPassword
          placeholder="senha"
          value={usuarioSenha}
          onChangeText={setUsuarioSenha}
        />
      </Content>
      <Content>
        <Button onPress={HandlePost} name="salvar" />
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};

export default CategoryEdit;
