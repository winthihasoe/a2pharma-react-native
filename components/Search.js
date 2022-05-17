import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Search({}) {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.input} placeholder="Search drug" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "#ddd",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
  },
  searchBtn: {
    marginTop: 20,
    width: 320,
    height: 44,
    backgroundColor: "coral",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 10,
  },
  searchText: {
    fontSize: 20,
    textAlign: "center",
  },
});
