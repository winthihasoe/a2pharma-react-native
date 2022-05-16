import { StyleSheet, Text, View } from "react-native";

export default function addDrug() {
  return (
    <View style={styles.title}>
      <Text style={styles.titleName}>Add Drug screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 40,
  },
  titleName: {
    justifyContent: "center",
  },
});
