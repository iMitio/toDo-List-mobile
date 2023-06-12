import {View, Alert} from "react-native"

import {styled} from  "./styles"
import { Header } from "../../components/Header"
import { Form } from "../../components/Form"
import { TaskList } from "../../components/TaskList"
import { useState } from "react"

export interface Task {
  id: number;
  name: string;
  taskChecked: boolean
}

export function Home() {
  const [task, setTask] = useState<Task[]>([])

 

  function addNewTask(text:string){
    task.filter(item=>{
      if(item.name===text){
        Alert.alert('Essa tarefa já existe');
        return;
      }
    })

    const NewElement:Task={
      id: task?.length+1,
      name:text,
      taskChecked:false,
    }
    setTask(prevState => [...prevState, NewElement])
  }

  function removeTask(item: Task  ) {
     setTask(task.filter((task) => task.id !== item.id))
 
  }

  function taskCompleted(item: Task) {
    const taskComplete = task.map(task => {
      if(task.id === item.id){
        task.taskChecked =! task.taskChecked
      }
      return task
    }) 
    setTask(taskComplete)
  }



  return (
    <View style={styled.container}>
      <Header />
      <Form handleAddTask={addNewTask}/>
      <TaskList
        task={task}
        handleRemove={removeTask}
        handleCompleted={taskCompleted}
      />
    </View>
  )
}