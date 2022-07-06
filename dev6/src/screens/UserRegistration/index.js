import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "./../../components/LogoWithTitle";
import UserImage from "./../../components/UserImage";
import InputText from "./../../components/InputText";
import ButtonBack from "./../../components/ButtonBack";
import Button from "./../../components/Button";
import InputPassword from "./../../components/InputPassword";

const UserRegistration = () => {
  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }
  return (
    <Container>
      <Content>
        <LogoWithTitle title="cadastrar usuário" />
        <UserImage />
        <InputText placeholder="nome completo" />
        <InputText placeholder="cpf" />
        <InputText placeholder="data de nascimento" />
        <InputText placeholder="login" />
        <InputPassword placeholder="senha" onPress={() => onPress} />
        <Button onPress={() => console.log("handleToSave")} name="salvar" />
        <ButtonBack onPress={backScreen}/>
      </Content>
    </Container>
  );
};

export default UserRegistration;