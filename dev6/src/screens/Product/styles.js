import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  align-self: center;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-right: 10px;
`;

export const Touchable = styled.TouchableOpacity`
  align-self: center;
`;

export const CusttomButton = styled.TouchableOpacity`
  margin-top: 5%;
  margin-right: 2%;
  margin-left: 2%;
`;

/* ====================================================================== */

export const MainContainer = styled.View`
  flex-direction: column;
`;
export const ContainerBtnOptions = styled.View`
  margin: 5%;
  flex-direction: row;
  justify-content: space-around;
`;

export const ContainerDscrpt = styled.View`
  flex-direction: row;
  margin: 2%;
`;

export const TxtDscrpt = styled.Text`
  font-size: 15;
  font-weight: bold;
`;

export const TitleProduct = styled.Text`
  font-size: 20;
  font-weight: 900;
  text-align: center;
`;

export const Container = styled.View`
  height: 80%;
  width: 80%;
  padding: 2%;
  margin: 30px;
  justify-content: center;
  align-items: center;
`;
