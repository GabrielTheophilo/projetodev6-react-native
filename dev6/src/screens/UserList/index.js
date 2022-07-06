import UserImage from "../../components/UserImage";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import TitleScreen from "../../components/TitleScreen";
//import { useNavigation } from "@react-navigation/native";
import { FlatList, Text } from "react-native";
import { useState, useEffect } from "react";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
  getByIdUser,
  getUserCount,
} from "../../services/users/index";
import { Image } from "react-native";
import { styles } from "../../components/UserImage/styles";

const UserList = () => {
  // const nav = useNavigation();
  // function backScreen() {
  //   nav.goBack();
  // }

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
      <Text>{nome}</Text>
      <Text>{dtNascimento}</Text>
      <Text>{cpf}</Text>
      <Text>{login}</Text>
      <Text>{senha}</Text>
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
          onPress={() => console.log("handleToAdd")}
        />
        <FlatList
          data={user}
          renderItem={renderUser}
          keyExtractor={(item) => item.id}
        />
        <ButtonBack />
      </Content>
    </Container>
  );
};

export default UserList;
