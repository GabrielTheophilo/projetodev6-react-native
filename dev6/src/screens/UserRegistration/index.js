import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import { postUser } from "../../services/users";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import InputPassword from "./../../components/InputPassword/Index";
import InputText from "../../components/InputText";
import { ContentRegistration } from "./styles";

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

  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }

  return (
    <Container>
      <ContentRegistration>
        <LogoWithTitle title="cadastrar usuário" />
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

export default UserRegistration;
