import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#222",
            marginBottom: 20,
          }}
        >
          Login
        </Text>
        {error && (
          <Text style={{ color: "red", marginBottom: 15 }}>{error}</Text>
        )}
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          autoFocus
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          clearButtonMode="while-editing"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholder="password"
        />

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => login(email, password)}
        >
          {isLoading && <ActivityIndicator color="white"></ActivityIndicator>}

          <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: 20 }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text style={{ color: "coral" }}>Resgister</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#eee",
  },
  inner: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 50,
    borderRadius: 20,
    marginTop: 60,
  },
  labelFor: {
    fontSize: 15,
    marginBottom: 8,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "white",
    marginBottom: 10,
  },
  btnContainer: {
    height: 40,
    marginTop: 12,
    backgroundColor: "coral",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
