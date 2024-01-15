import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    Alert,
    Image,
  } from "react-native";
import {styles} from './styles'

type Props = {
  tarefa: string;
  onRemove: () => void;
};

export function Task({ tarefa, onRemove}: Props) {
    return (
      <View style={styles.container}>
        
        <View style={styles.tarefaList}>
        <Text style={styles.tarefa}>{tarefa}</Text>
  
        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }