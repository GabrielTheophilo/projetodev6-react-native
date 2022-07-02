import {Text, View} from "react-native";
import {TextIn,ImageLogo,Container} from "./styles";

export const Navbar = (props) => {

    return (
        <View>
            <Container>
            <ImageLogo source={require("../../../assets/icon.png")}></ImageLogo>
            <TextIn>{props.titulo}</TextIn>
            </Container>
        </View>
    )
}

export default Navbar;