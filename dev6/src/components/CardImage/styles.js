import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    photo: {
      width: 400,
      height: 200,
      borderRadius: 20,
      alignSelf: "center",
      backgroundColor: "#cdcdcd",
    },
    
  });
  

 export const LoadingContainer = styled.View`

     width: 1rem;
     height: 1.5rem;
     border-radius: 20px;
     align-items: center;
     background-color: #cdcdcd;
     justify-content: center;
 `