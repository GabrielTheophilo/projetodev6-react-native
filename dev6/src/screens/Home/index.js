import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import MenuIcon from "../../components/MenuIcon";
import ButtonBack from "../../components/ButtonBack";
import { useNavigation } from "@react-navigation/native";
import { CusttomButton, TitleHome } from "./styles";
import { Text } from "react-native";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

const Home = () => {
  useFonts({
    Poppins_700Bold,
  });

  const nav = useNavigation();

  function homeScreen() {
    nav.navigate("Home");
  }
  function userScreen() {
    nav.push("UserList");
  }
  function categoryScreen(){
    nav.push("CategoryList");
  }
  function backScreen() {
    nav.goBack();
  }

  return (
    <Container>
      <Header name="Usuário" />
      <Content>
        <TitleHome>O que deseja acessar?</TitleHome>
      </Content>
      <Content>
        <MenuIcon name="produtos" iconName="md-briefcase" />
      </Content>
      <Content>
        <MenuIcon name="categorias" iconName="search-sharp" onPress={categoryScreen}/>
      </Content>
      <Content>
        <MenuIcon
          name="usuários"
          iconName="ios-person-circle"
          onPress={userScreen}
        />
      </Content>
      <CusttomButton>
        <ButtonBack onPress={backScreen} />
      </CusttomButton>
    </Container>
  );
};

export default Home;
