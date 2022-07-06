import React, { useState, useEffect } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Poppins_700Bold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { LoadingContainer } from "../splash/styles";
import { PageLoading } from "../../components/PageLoading";
import { Container } from "../../components/GlobalStyles/styles";
import  Header from "../../components/Header";
import ButtonBack from "../../components/ButtonBack";
import CardImage from "../../components/CardImage";
import {  TitleText, TextContainer } from "./styles";
import TitleScreen from "../../components/TitleScreen";
import { getCategoria, getCategoriaById, getCategoriaCount, postCategoria, putCategoria, deleteCategoria } from "../../services/category";


export const CategoryList = () => {
    
    
      


    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
      getCategoria().then((response) => {
        console.log(response);
        setCategoria(response);
      });
    }, []);
  
    const Items = ({ nome, foto }) => (
      <>

        <CardImage photo={{ uri: foto }} />
        
        <TextContainer>
        <TitleText>{nome}</TitleText>
        </TextContainer>
       
      </>
    );
  
    const renderCategoria = ({ item }) => (
      <Items
        foto={item.foto}
        nome={item.nome}
      />
    );
  


    const nav = useNavigation();
    
    function homeScreen() {
        nav.navigate("Home");
    }
    function userScreen() {
        nav.push("UserList");
    }
    function backScreen() {
        nav.goBack();
    }
    function editScreen(){
        nav.push("CategoryEdit");
    }
    
    let [fontsLoaded] = useFonts({
        Poppins_700Bold,
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
            <Container>
                <Header></Header>
                <TitleScreen
                    title="categorias"
                    icon={true}
                    onPress={() => editScreen()}
                />
                
                <FlatList
                    data={categoria}
                    renderItem={renderCategoria}
                    keyExtractor={(item) => item.id}
                ></FlatList>
                
                <ButtonBack onPress={backScreen}></ButtonBack>
            </Container>
            )
        };
}

export default CategoryList;