import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, FlatList, Modal } from "react-native";
import { Container, Content } from "../../components/GlobalStyles/styles";
import Header from "../../components/Header";
import { Title, Touchable } from "./styles";
import Products from "./Products";
import ButtonBack from "../../components/ButtonBack";
import { getProduct } from "../../services/product";
import PostModal from "./PostModal";

const Product = (props) => {
  const [feed, setFeed] = useState([]);
  const [postModal, setPostModal] = useState(false);

  useEffect(() => {
    Api.get("https://reactnative.herokuapp.com/reactnative/produto").then(
      (response) => {
        setFeed(response.data);
      }
    );
  }, []);

  const openPostModal = () => {
    setPostModal(true);
  };
  return (
    <Container>
      <Header />
      <Content>
        <View style={styles.containerRow}>
          <Title>Produtos</Title>
          <Touchable onPress={openPostModal}>
            <Ionicons name="add" size={26} color="orange" />
          </Touchable>
        </View>
        <FlatList
          data={feed}
          renderItem={({ item }) => <Products data={item} />}
        />
        <ButtonBack />
        <Modal animationType="slide" visible={postModal}>
          <PostModal />
        </Modal>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
  },
});

export default Product;
