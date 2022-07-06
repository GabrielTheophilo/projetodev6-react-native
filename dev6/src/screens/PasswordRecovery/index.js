import { Text } from "react-native";
import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import ButtonBack from "../../components/ButtonBack";

const PasswordRecovery = () => {
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

export default PasswordRecovery;