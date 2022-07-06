import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import { postUser } from "../../services/users";
import { UserText } from "./styles";
import { useState } from "react";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";

const UserRegistration = () => {
  useFonts({
    Poppins_400Regular,
  });

  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioFoto, setUsuarioFoto] = useState("");
  const [usuarioCpf, setUsuarioCpf] = useState("");
  const [usuarioDtNascimento, setUsuarioDtNascimento] = useState("");
  const [usuarioLogin, setUsuarioLogin] = useState("");
  const [usuarioSenha, setUsuarioSenha] = useState("");

  const newUser = {
    id: 123,
    nome: usuarioNome,
    foto: usuarioFoto,
    dtNascimento: usuarioDtNascimento,
    login: usuarioLogin,
    senha: usuarioSenha,
    cpf: usuarioCpf,
  };

  const HandlePost = () => {
    postUser(newUser);
  };

  // const nav = useNavigation();
  // function backScreen() {
  //   nav.goBack();
  // }

  return (
    <Container>
      <Content>
        <LogoWithTitle title="cadastrar usuário" />
      </Content>
      <Content>
        <UserText
          placeholder="foto"
          value={usuarioFoto}
          onChangeText={setUsuarioFoto}
        />
        <UserText
          placeholder="nome"
          value={usuarioNome}
          onChangeText={setUsuarioNome}
        />
        <UserText
          placeholder="cpf"
          value={usuarioCpf}
          onChangeText={setUsuarioCpf}
        />
        <UserText
          placeholder="data de nascimento"
          value={usuarioDtNascimento}
          onChangeText={setUsuarioDtNascimento}
        />
        <UserText
          placeholder="login"
          value={usuarioLogin}
          onChangeText={setUsuarioLogin}
        />
        <UserText
          placeholder="senha"
          value={usuarioSenha}
          onChangeText={setUsuarioSenha}
        />
      </Content>
      <Content>
        <Button onPress={HandlePost} name="salvar" />
        <ButtonBack />
      </Content>
    </Container>
  );
};

export default UserRegistration;
