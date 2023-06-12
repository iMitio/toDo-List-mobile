import { TextInput, TouchableOpacity, Image, View, Alert } from "react-native";
import PlusCircleo  from "@expo/vector-icons/AntDesign"
import { styled } from "./styles";
import { useState } from "react";

interface Props {
  handleAddTask: (text: string) => void;
}

export function Form ({handleAddTask}: Props) {
  const [textTask, setTextTask] = useState("")


  function InsertTask() {
    if(textTask === "") {
      Alert.alert("Digite uma tarefa");
      return
    }
    handleAddTask(textTask),
    setTextTask("")
  }
  return (
    <View style={styled.container}>
      <TextInput 
        style={styled.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTextTask}
        value={textTask}
      />
      <TouchableOpacity 
        style={styled.button}
        onPress={() => InsertTask()}
      >
        <PlusCircleo 
          name="pluscircleo" 
          size={16}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  )
}