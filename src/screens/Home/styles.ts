import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "# 333333",
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
    width: '100%',
    height: 54,
    flexDirection: "row",
    marginTop: 142,
    position:'absolute',
  },

  input: {
    backgroundColor: "#262626",
    flex: 1,
    marginLeft: 24,
    marginRight: 4,
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 15,
    
  },

  button: {
    width: 54,
    height: 54,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 24,
  },

  buttonText: {
     color: "#fff"
  },

 
});
