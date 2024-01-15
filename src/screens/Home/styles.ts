import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
  },

  header: {
    height: 173,
    backgroundColor: "#0D0D0D",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: 32,
    width: 110.34,
  },

  form: {
    width: "100%",
    height: 54,
    flexDirection: "row",
    marginTop: 142,
    position: "absolute",
  },

  input: {
    backgroundColor: "#262626",
    flex: 1,
    marginLeft: 24,
    marginRight: 4,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 15,
    borderWidth: 1,
    color: '#FFF'  
  },

  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
  },

  buttonText: {
    color: "#fff",
  },

  body: {
    marginTop: 55,
  },

  contador: {
    flexDirection: "row",
    width: "100%",
    height: 19,
    justifyContent: "space-between",
    marginBottom: 20,
  },

  criadas: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#4EA8DE",
    marginLeft: 24,
    
  },

  concluidas: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#8384FA",
    marginRight: 24,
  
  },

  infor: {
    borderTopWidth: 1,
    borderTopColor: '#808080',
    //marginTop: 24,
    marginLeft: 24,
    marginRight: 24,
    height: 208,
    alignItems: 'center', 
    
    
  },

  clip: {
    height: 56,
    width: 56,
    marginTop: 48,
  },

  infor1: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
    textAlign: 'center',
    marginTop: 16,
    height: 20,
    width: 300,
  },

  infor2: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'center',
    height: 20, 
  },
});
