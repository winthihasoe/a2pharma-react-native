import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function Search({ handleChange }) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Amlosun"
        onChangeText={handleChange}
      />

      <View style={styles.searchBtn}>
        <Text style={styles.searchText}>Search</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 50,
    paddingVertical: 38,
    width: "100%",
    borderBottomColor: "#ddd",
  },
  input: {
    width: 320,
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
