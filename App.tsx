import { StyleSheet, Text, View, Alert } from "react-native";

import ShoppingItemList from "./components/ShoppingItemList";

export default function App() {
  
  return (
    <View style={styles.container}>
      <ShoppingItemList name={"Coffee"}/>
      <ShoppingItemList name={"Tea"} isCompleted/>
      <ShoppingItemList name={"Sugar"} isCompleted/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
})