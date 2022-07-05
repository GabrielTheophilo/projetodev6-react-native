import { Container, Content } from "../../components/GlobalStyles/styles";
import { Header } from "../../components/Header/Index";
import { MenuIcon } from "../../components/MenuIcon/Index";
import { ButtonBack } from "../../components/ButtonBack/Index";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const nav = useNavigation();

  function homeScreen() {
    nav.navigate("Home");
  }
  function userScreen() {
    nav.push("UserList");
  }
  function backScreen() {
    nav.goBack();
  }

  return (
    <Container>
      <Header name="Usuário" />
      <Content>
        <MenuIcon name="produtos" iconName="md-briefcase" />
        <MenuIcon name="categorias" iconName="search-sharp" />
        <MenuIcon name="usuários" iconName="ios-person-circle" onPress={userScreen} />
        <ButtonBack onPress={backScreen}/>
      </Content>
    </Container>
  );
};
