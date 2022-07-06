import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const styles = StyleSheet.create({
    photo: {
      width: 300,
      height: 200,
      borderRadius: 40,
      alignSelf: "center",
      backgroundColor: "#cdcdcd",
    },
    
  });
  

 export const LoadingContainer = styled.View`

     width: 1rem;
     height: 1.5rem;
     border-radius: 40px;
     align-items: center;
     background-color: #cdcdcd;
     justify-content: center;
 `