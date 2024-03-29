import { StyleSheet } from "react-native";

const styles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
    },
    countContainer: {
      alignItems: "center",
      padding: 10,
    },
    countText: {
      color: "#FF00FF",
    },
  });
};

export default styles;
