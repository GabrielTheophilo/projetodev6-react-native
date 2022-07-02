import styled from "styled-components/native";

export const Container = styled.View`
    width: 90%;
    padding: 15px;
`;

export const Content = styled.View`
    flex-direction: row;
    padding: 10px;

`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  align-self: center;
  padding-top: 3px;
  padding-bottom: 3px;
`;

export const Logo = styled.Image`
position:absolute;
width: 100%;
height: 50em;
z-index:-1;
`;
 
export const Imagem = styled.Image`
    margin-right: 20px;
    width:45;
    height: 45;
    z-index:-1;
`;