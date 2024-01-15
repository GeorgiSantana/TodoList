import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState('');

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert(
        "Tarefa existente.",
        "Essa tarefa já foi incluida na lista."
      );
    }
    // Acessa o conteúdo atual do estado, cria um no array com o conteúdo atual + o conteúdo novo.
    setTasks(prevState => [...prevState, taskName]);
    setTaskName('');
  }

  function hendleTaskRemove(tarefa: string) {
    Alert.alert("Remover", `Remover tarefa da lista ${tarefa}?`, [
      {
        text: "sim",
        onPress: () =>
          setTasks(prevState => prevState.filter(task => task !== tarefa)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require("../../assets/todo.png")} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTaskName}
          value={taskName}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.contador}>
          <Text style={styles.criadas}>Criadas</Text>
          <Text style={styles.concluidas}>Concluídas</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Task
            key={item}
            tarefa={item}
            onRemove={() => hendleTaskRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.infor}>
            <Image
              style={styles.clip}
              source={require("../../assets/Clipboard.png")}
            />
            <Text style={styles.infor1}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.infor2}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
