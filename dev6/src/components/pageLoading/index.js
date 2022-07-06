import { ActivityIndicator, View } from 'react-native';
import styled from "styled-components/native";

export const PageLoading = () => {
    return (
       <View> 
        <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
    )
}
