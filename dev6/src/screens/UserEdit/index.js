import { Container, Content } from "./../../components/GlobalStyles/styles";
import LogoWithTitle from "../../components/LogoWithTitle";
import UserImage from "../../components/UserImage";
import InputText from "../../components/InputText";
import ButtonBack from "../../components/ButtonBack";
import Button from "../../components/Button";
import InputPassword from "../../components/InputPassword";
import { useNavigation } from "@react-navigation/native";
import { ContentEdit } from "./styles";

const UserEdit = () => {
  const nav = useNavigation();
  function backScreen() {
    nav.goBack();
  }
  return (
    <Container>
      <ContentEdit>
        <LogoWithTitle title="editar usuário" />
      </ContentEdit>
      <Content>
        <InputText placeholder="foto" />
        <InputText placeholder="nome completo" />
        <InputText placeholder="cpf" />
        <InputText placeholder="data de nascimento" />
        <InputText placeholder="login" />
        <InputPassword placeholder="senha" onPress={() => onPress} />
      </Content>
      <Content>
        <Button onPress={() => console.log("handleToSave")} name="atualizar" />
        <ButtonBack onPress={backScreen} />
      </Content>
    </Container>
  );
};

export default UserEdit;
