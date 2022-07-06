import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, TouchableOpacity, View } from "react-native";
import { StyledContainer } from "./styles";
import { styles } from "../CardImage/styles";
import { useFonts } from "@expo-google-fonts/poppins";
import { Poppins_500Medium } from "@expo-google-fonts/poppins";
import { LoadingContainer } from "./styles";
import {PageLoading} from "../PageLoading";

const UserImage = (props) => {
  let [fontsLoaded] = useFonts({
    
    Poppins_500Medium,
  });
  if (!fontsLoaded) {
    return (
      <LoadingContainer>
      <PageLoading />
      </LoadingContainer>
      )
    }else {
      return (
        <View >
        
        {props.photo ? (
          <Image source={props.photo} style={styles.photo}/>
          ) : (
            <StyledContainer>
            <TouchableOpacity disabled>
            <Ionicons name="md-add-circle" size={25} color="#797878" />
            </TouchableOpacity>
            </StyledContainer>
            )}
            
            </View>
            
            );}
            
          };
          
          export default UserImage;
          