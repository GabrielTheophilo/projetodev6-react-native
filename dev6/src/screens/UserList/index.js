import UserImage from "../../components/UserImage";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import TitleScreen from "../../components/TitleScreen";
import InputText from "../../components/InputText";
import { useNavigation } from "@react-navigation/native";

const UserList = () => {
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

export default UserList;