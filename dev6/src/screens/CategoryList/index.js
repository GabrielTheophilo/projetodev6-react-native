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
import {  TitleText, TextContainer, TitleContainer, CusttomButton, StyledButton } from "./styles";
import TitleScreen from "../../components/TitleScreen";
import { getCategoria, getCategoriaById, getCategoriaCount, postCategoria, putCategoria, deleteCategoria } from "../../services/category";
import {Modal} from "react-native";
import Button from "../../components/Button";
import Ionicons from "@expo/vector-icons/Ionicons";


export const CategoryList = () => {
  
  const [categoria, setCategoria] = useState([]);
  
  useEffect(() => {
    getCategoria().then((response) => {
      console.log(response);
      setCategoria(response);
    });
  }, []);
  
  const Items = ({ id, nome, foto }) => {
    
    const [modalVisible, setModalVisible] = useState(false);
    return (
      
      <>
      <CardImage photo={{ uri: foto }} />
      <TextContainer>
      <TitleText>{nome}</TitleText>
      </TextContainer>
      <Button name="Acessar categoria" onPress={()=> setModalVisible(true)}></Button>
      <Modal animationType="slide"  visible={modalVisible} > 
      <Header></Header>
      <Container>
      <CardImage photo={{ uri: foto }} />
      <TextContainer>
      <TitleText>{nome}</TitleText>
      <TitleText>{id}</TitleText>
      </TextContainer>
      <CusttomButton onPress={()=> deleteCategoria(id)}>
      <Ionicons name="trash" size={20} color="#ff7800" />
      </CusttomButton>
      <CusttomButton onPress={()=>{
        editScreen(id);
        setModalVisible(false);
        }}>
          <Ionicons name="ios-pencil" size={20} color="#ff7800"/>
      </CusttomButton>
      <Button name="Voltar" onPress={()=> setModalVisible(false)}></Button>
      </Container>
      
      </Modal>
      </>
      );}
      
      const renderCategoria = ({ item }) => (
        <Items
        id={item.id}
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
        function addScreen(){
          nav.push("CategoryAdd");
        }

        function editScreen(_id){
          nav.navigate("CategoryEdit", {
            id:_id,
          });
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
              <TitleContainer>
              <TitleScreen
              title="categorias"
              icon={true}
              onPress={() => addScreen()}
              />
              </TitleContainer>
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