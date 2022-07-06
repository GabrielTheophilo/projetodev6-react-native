import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import MenuIcon from "../../components/MenuIcon";
import ButtonBack from "../../components/ButtonBack";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const nav = useNavigation();

  function homeScreen() {
    nav.navigate("Home");
  }
  function userScreen() {
    nav.push("UserList");
  }
  function categoryScreen(){
    nav.push("Category");
  }
  function backScreen() {
    nav.goBack();
  }

  return (
    <Container>
      <Header name="Usuário" />
      <Content>
        <MenuIcon name="produtos" iconName="md-briefcase" />
        <MenuIcon name="categorias" iconName="search-sharp" onPress={categoryScreen} />
        <MenuIcon name="usuários" iconName="ios-person-circle" onPress={userScreen} />
        <ButtonBack onPress={backScreen}/>
      </Content>
    </Container>
  );
};

export default Home;