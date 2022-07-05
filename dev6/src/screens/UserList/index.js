import UserImage from "../../components/UserImage/Index";
import { Container, Content } from "../../components/GlobalStyles/styles";
import { Header } from "../../components/Header/Index";
import { ButtonBack } from "../../components/ButtonBack/Index";
import { TitleScreen } from "../../components/TitleScreen/Index";
import InputText from "../../components/InputText/Index";

export const Users = () => {
  return (
    <Container>
      <Header name="Usuário" />
      <Content>
        <TitleScreen
          title="usuários"
          icon={true}
          onPress={() => console.log("handleToAdd")}
        />
        <UserImage />
        <InputText placeholder="nome completo" />
        <InputText placeholder="cpf" />
        <InputText placeholder="data de nascimento" />
        <InputText placeholder="login" />
        <ButtonBack />
      </Content>
    </Container>
  );
};
