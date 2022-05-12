import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function Main() {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={() => Alert.alert("clicked!")}>
        <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
          <Text style={styles.btnText}>Add New Drug</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
          <Text style={styles.btnText}>Show Drug</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btn: {
    width: 140,
    height: 100,
    backgroundColor: "coral",
    borderRadius: 10,
  },
  btnText: {
    flex: 1,
    textAlign: "center",
    paddingVertical: 35,
    fontSize: 18,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});
