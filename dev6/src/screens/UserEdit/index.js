import { Container, Content } from "./../../components/GlobalStyles/styles";
import { LogoWithTitle } from "./../../components/LogoWithTitle/Index";
import { UserImage } from "./../../components/UserImage/Index";
import { InputText } from "./../../components/InputText/Index";
import { ButtonBack } from "./../../components/ButtonBack/Index";
import { Button } from "./../../components/Button/Index";
import InputPassword from "./../../components/InputPassword/Index";

export const UserEdit = () => {
  return (
    <Container>
      <Content>
        <LogoWithTitle title="editar usuário" />
        <UserImage />
        <InputText placeholder="nome completo" />
        <InputText placeholder="cpf" />
        <InputText placeholder="data de nascimento" />
        <InputText placeholder="login" />
        <InputPassword placeholder="senha" onPress={() => onPress} />
        <Button onPress={() => console.log("handleToSave")} name="atualizar" />
        <ButtonBack />
      </Content>
    </Container>
  );
};
