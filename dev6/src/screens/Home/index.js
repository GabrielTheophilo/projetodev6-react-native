import { Container, Content } from "../../components/GlobalStyles/styles";
import { Header } from "../../components/Header/Index";
import { MenuIcon } from "../../components/MenuIcon/Index";
import { ButtonBack } from "../../components/ButtonBack/Index";

export const Home = () => {
  return (
    <Container>
      <Header name="Usuário" />
      <Content>
        <MenuIcon name="produtos" iconName="md-briefcase" />
        <MenuIcon name="categorias" iconName="search-sharp" />
        <MenuIcon name="usuários" iconName="ios-person-circle" />
        <ButtonBack />
      </Content>
    </Container>
  );
};
