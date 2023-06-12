import { View, Text, Image,  FlatList } from "react-native";
import {Task} from "../../screen/Home"
import Clipboard from "../../assets/clipboard.png"
import { styled } from "./styles";

import { Card } from "../Card";

interface Props {
  task: Task[];
  handleRemove: (item: Task) => void;
  handleCompleted: (item: Task) => void;
}

export function TaskList({task, handleRemove, handleCompleted}: Props) {
  return (
    <View style={styled.container}>
      <View style={styled.header}>
        <View style={styled.headerContent}>
          <Text style={styled.titleCreated}>Criadas</Text>
          <View style={styled.countBox}>
            <Text style={styled.count}>
            {task.filter((item)=>item.taskChecked!=false).length}
            </Text>
          </View>
        </View>
        <View style={styled.headerContent}>
          <Text style={styled.titleConcluded}>Concluídas</Text>
          <View style={styled.countBox}>
            <Text style={styled.count}>0</Text>
          </View>
        </View>
      </View>

      <View style={styled.content}>
        <FlatList 
          data={task}
          renderItem={({item}) => (
            <Card
              check={item.taskChecked}
              task={item}
              handleTrash={handleRemove}
              handleCompleted={handleCompleted}
            />
          )}
          keyExtractor={item =>String(item.id)}
          ListEmptyComponent={
            () => (
                <View style={styled.objetEmpty}>
                  <Image source={Clipboard} />
                  <View>
                  <Text style={styled.textListEmpty}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={styled.subtextListEmpty}>Crie tarefas e organize seus itens a fazer</Text>
                  </View>
                </View> 
            )
          }
        />
      </View>

    </View>
  )
}