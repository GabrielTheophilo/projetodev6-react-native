import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import UserImage from "../../components/UserImage";
import InputText from "../../components/InputText";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import { ContentEdit } from "./styles";
import { getUserById, putUser } from "../../services/users/index";
import { useState, useEffect } from "react";

const UserEdit = ({ route }) => {
  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioFoto, setUsuarioFoto] = useState("");
  const [usuarioCpf, setUsuarioCpf] = useState("");
  const [usuarioDtNascimento, setUsuarioDtNascimento] = useState("");
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [usuarioSenha, setUsuarioSenha] = useState("");

  const [userId] = useState(route.params.id);

  const newUser = {
    ativo: true,
    nome: usuarioNome,
    foto: usuarioFoto,
    dtNascimento: usuarioDtNascimento,
    login: usuarioLogin,
    senha: usuarioSenha,
    cpf: usuarioCpf,
  };

  const HandlePut = () => {
    putUser(userId, newUser).then((response) => {
      nav.goBack();
    });
  };

  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }

  useEffect(() => {
    getUserById(userId).then((response) => {
      console.log(response);
      setUsuarioFoto(response.foto);
      setUsuarioNome(response.nome);
      setUsuarioCpf(response.cpf);
      setUsuarioDtNascimento(response.dtNascimento);
      setUsuarioLogin(response.login);
      setUsuarioSenha(response.senha);
    });
  }, []);

  return (
    <Container>
      <ContentEdit>
        <LogoWithTitle title="editar usuário" />
      </ContentEdit>
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
        <Button onPress={HandlePut} name="atualizar" />
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};

export default UserEdit;
