import styled from "styled-components/native";
import React from "react";

export const Format = styled.TouchableOpacity`
  background-color: black;
  border-radius: 5px;
  border-width: 2px;
  border-color: #000000;
  
  height: 4em;
  width: 15em;
  left: 5.5em;
`;

export const TextDisplayed = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
  font-weight: bold;
  align-self: center;
 
  
`;

export const ClickToEnter = (props) => {
  return (
    <Format onPress={props.onPress}>
      <TextDisplayed>{props.text}</TextDisplayed>
    </Format>
  );
};

export default ClickToEnter;
