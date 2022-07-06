import UserImage from "../../components/UserImage";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import TitleScreen from "../../components/TitleScreen";
//import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import {
  getUser,
  postUser,
  putUser,
  deleteUser,
  getByIdUser,
  getUserCount,
} from "../../services/users/index";

const UserList = () => {
  // const nav = useNavigation();
  // function backScreen() {
  //   nav.goBack();
  // }

  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then((response) => {
      console.log(response);
      console.log(response.data);
      setUser(response.data);
    });
  }, [user]);

  const renderUser = ({ item }) => (
    <Items
      photo={item.foto}
      name={item.nome}
      cpf={item.cpf}
      birthDate={item.dtNascimento}
      login={item.login}
      password={item.senha}
    />
  );

  const Items = ({ foto, nome, dtNascimento, login, senha, cpf }) => (
    <>
      <UserImage photo={foto} />
      <Text>{nome}</Text>
      <Text>{dtNascimento}</Text>
      <Text>{cpf}</Text>
      <Text>{login}</Text>
      <Text>{senha}</Text>
    </>
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
