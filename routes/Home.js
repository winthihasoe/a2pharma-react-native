import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import Logo from "../components/Logo";

export default function Home({ navigation }) {
  const clickHandaler = () => {
    const url = "http://localhost:8000/api/drugs";
    fetch(url)
      .then((res) => res.json())
      .then((resjson) => alert(JSON.stringify(resjson)))
      .catch((err) => console.log(err));
  };
  return (
    <View>
      <Logo />
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={clickHandaler}>
          <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
            <Text style={styles.btnText}>Add New Drug</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AllDrugs", clickHandaler)}
        >
          <View style={[styles.btn, styles.shadowProp, styles.elevation]}>
            <Text style={styles.btnText}>Show Drug</Text>
          </View>
        </TouchableOpacity>
      </View>
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
