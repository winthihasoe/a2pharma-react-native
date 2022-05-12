import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.userName}>Username</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 40,
    flexDirection: "row",
    padding: 20,

    justifyContent: "flex-end",
  },
  userName: {
    justifyContent: "flex-end",
    padding: 10,
    color: "#C38042",
    fontSize: 25,
  },
});
