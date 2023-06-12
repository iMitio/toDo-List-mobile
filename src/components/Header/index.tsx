import { View, Image} from "react-native";

import { styled } from "./styles";
import logoImg from "../../assets/logo.png"

export function Header () {
  return(
    <View style={styled.container}>
      <Image  source={logoImg}/>
    </View>
  )
}