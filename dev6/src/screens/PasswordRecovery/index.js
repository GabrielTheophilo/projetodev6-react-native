import { Text } from "react-native";
import { Container, Content } from "./../../components/GlobalStyles/styles";
import { LogoWithTitle } from "./../../components/LogoWithTitle/Index";
import { InputText } from "./../../components/InputText/Index";
import { Button } from "./../../components/Button/Index";
import { ButtonBack } from "./../../components/ButtonBack/Index";

export const PasswordRecovery = () => {
  return (
    <Container>
      <Content>
        <LogoWithTitle title="esqueci minha senha" />
        <Text>
          insira seu login para receber o código para recuperação de senha
        </Text>
        <InputText placeholder="login" />
        <Button onPress={() => console.log("handleToSave")} name="enviar" />
        <ButtonBack />
      </Content>
    </Container>
  );
};
