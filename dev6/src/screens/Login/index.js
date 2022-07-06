import { Container, Content } from "../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import InputText from "../../components/InputText";
import InputPassword from "../../components/InputPassword";
import Button from "../../components/Button";
import { ButtonFormat, TextButton } from "./styles";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const nav = useNavigation();
  function homeScreen() {
    nav.navigate("Home");
  }
  useFonts({
    Poppins_500Medium,
  });
  return (
    <Container>
      <Content>
        <LogoWithTitle title="seja bem-vindo" />
      </Content>
      <Content>
        <InputText placeholder="login" />
        <InputPassword placeholder="senha" onPress={() => onPress} />
      </Content>
      <Content>
        <Button onPress={homeScreen} name="entrar" />
        <ButtonFormat>
          <TextButton>esqueci minha senha</TextButton>
        </ButtonFormat>
      </Content>
    </Container>
  );
};

export default Login;
