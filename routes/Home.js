import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Logo from "../components/Logo";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

export default function Home({ navigation }) {
  const { logout, isLoading } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Logo />
      {isLoading && <ActivityIndicator color="gray"></ActivityIndicator>}
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("AddDrug")}>
          <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
            <Text style={styles.btnText}>Add New Drug</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AllDrugs")}>
          <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
            <Text style={styles.btnText}>Retail Price</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("DoctorDrugs")}>
          <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
            <Text style={styles.btnText}>Doctor Price</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    paddingTop: 40,
  },
  titleName: {
    justifyContent: "center",
  },
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
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
    shadowColor: "#fff",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});
