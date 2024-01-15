import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    width: "100%",
    //top: 20,
    
  },


  tarefaList: {
    flexDirection: "row",
    alignItems: 'center',
    flex: 1,
    backgroundColor: "#262626",
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 5,
    marginBottom: 8,
    height: 64,
    justifyContent: 'space-between',
  },

  tarefa: {
    color: "#FFF",
    fontSize: 16,
    paddingLeft: 15,

  },

  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    marginRight: 15,
    //justifyContent: "center",
    //alignItems: "center",
    
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
    height: 64,
    width: 327,
  },
});
