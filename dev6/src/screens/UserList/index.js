import UserImage from "../../components/UserImage/Index";
import { Container, Content } from "../../components/GlobalStyles/styles";
import { Header } from "../../components/Header/Index";
import { ButtonBack } from "../../components/ButtonBack/Index";
import { TitleScreen } from "../../components/TitleScreen/Index";
import InputText from "../../components/InputText/Index";
import { useNavigation } from "@react-navigation/native";

export const UserList = () => {
  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }
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
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};
