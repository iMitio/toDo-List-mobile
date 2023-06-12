import CheckBox from  "react-native-bouncy-checkbox"
import TrashIcon from "@expo/vector-icons/FontAwesome5"
import {TouchableOpacity, View} from "react-native"
import { styled } from "./styles";

interface Task {
  id: number;
  name: string;
  taskChecked: boolean
}

interface Props{
  check: boolean;
  task: Task;
  handleTrash: (id: Task) => void;
  handleCompleted: (check:Task) => void;
}

export function Card({check, task, handleCompleted, handleTrash}: Props) {
  return (
    <View style={styled.container}>
      <CheckBox 
         size={25}
         fillColor="#5E60CE"
         iconStyle={{ borderColor: "#4EA8DE" }}
         innerIconStyle={{ borderWidth: 2 }}
         onPress={(isChecked: boolean) => { 
           handleCompleted({...task, taskChecked: isChecked}) 
         }}
         isChecked={check}
         text={task.name}
         style={{
           flex: 1, 
           flexDirection: 'row'
         }}
      />
      <TouchableOpacity
        onPress={() => handleTrash(task)}
      >
        <TrashIcon 
          name="trash-alt"
          size={16}
          color ="#808080"
        />
      </TouchableOpacity>
    </View>
  )
}