import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const CusttomButton = styled.TouchableOpacity`
  margin-top: 5%;
  margin-right: 2%;
  margin-left: 2%;
`;

export const ContentButton = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UserText = styled.Text`
  background-color: white;
  font-size: 15px;
  border-radius: 5px;
  border-width: 2px;
  border-color: #dcdcdc;
  width: 100%;
  height: 35px;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  align-self: center;
  font-family: "Poppins_400Regular";
`;
