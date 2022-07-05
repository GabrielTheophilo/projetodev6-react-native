import { Container, Content } from "../../components/GlobalStyles/styles";
import { LogoWithTitle } from "./../../components/LogoWithTitle/Index";
import { InputText } from "./../../components/InputText/Index";
import InputPassword from "./../../components/InputPassword/Index";
import { Button } from "./../../components/Button/Index";
import { ButtonFormat, TextButton } from "./styles";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

export const Login = () => {
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
        <Button onPress={() => console.log("handleToSave")} name="entrar" />
        <ButtonFormat>
          <TextButton>esqueci minha senha</TextButton>
        </ButtonFormat>
      </Content>
    </Container>
  );
};
