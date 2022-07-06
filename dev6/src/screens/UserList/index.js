import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import TitleScreen from "../../components/TitleScreen";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import { getUser } from "../../services/users/index";
import { Image } from "react-native";
import { styles } from "../../components/UserImage/styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ContentButton, CusttomButton, UserText } from "./styles";

const UserList = () => {
  const nav = useNavigation();

  function backScreen() {
    nav.goBack();
  }
  function userRegistrationScreen() {
    nav.navigate("UserRegistration");
  }
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then((response) => {
      console.log(response);
      setUser(response);
    });
  }, []);

  const Items = ({ foto, nome, dtNascimento, login, senha, cpf }) => (
    <>
      <Image source={{ uri: foto }} style={styles.photo} />
      <ContentButton>
        <CusttomButton>
          <Ionicons name="trash" size={20} color="#ff7800" />
        </CusttomButton>
        <CusttomButton>
          <Ionicons name="ios-pencil" size={20} color="#ff7800" />
        </CusttomButton>
      </ContentButton>
      <UserText>{nome}</UserText>
      <UserText>{dtNascimento}</UserText>
      <UserText>{cpf}</UserText>
      <UserText>login: {login}</UserText>
      <UserText>senha: {senha}</UserText>
    </>
  );

  const renderUser = ({ item }) => (
    <Items
      foto={item.foto}
      nome={item.nome}
      cpf={item.cpf}
      dtNascimento={item.dtNascimento}
      login={item.login}
      senha={item.senha}
    />
  );

  return (
    <Container>
      <Header name="Usuário" />
      <Content>
        <TitleScreen
          title="usuários"
          icon={true}
          onPress={userRegistrationScreen}
        />
        <FlatList
          data={user}
          renderItem={renderUser}
          keyExtractor={(item) => item.id}
        />
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};

export default UserList;
