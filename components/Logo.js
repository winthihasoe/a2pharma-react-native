import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>A2 Pharmacy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  logo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#C38042",
  },
});
