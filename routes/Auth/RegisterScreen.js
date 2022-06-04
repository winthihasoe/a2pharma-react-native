import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import AxiosConfig from "../../helpers/axiosConfig";
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function register(name, email, password, confirmedPassword) {
    setIsLoading(true);
    AxiosConfig.post("/register", {
      name,
      email,
      password,
      password_confirmation: confirmedPassword,
    })
      .then((response) => {
        Alert.alert("Registeration successful! ");

        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setIsLoading(false);
        const key = Object.keys(error.response.data.errors)[0];
        setError(error.response.data.errors[key][0]);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            color: "#222",
            marginBottom: 15,
          }}
        >
          Register
        </Text>
        {error && (
          <Text style={{ color: "red", marginBottom: 5 }}>{error}</Text>
        )}
        <TextInput
          style={styles.inputField}
          placeholder="Name"
          onChangeText={setName}
          value={name}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.inputField}
          placeholder="password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Confirmed Password"
          onChangeText={setConfirmedPassword}
          value={confirmedPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => register(name, email, password, confirmedPassword)}
        >
          {isLoading && <ActivityIndicator color="white" />}
          <Text style={{ color: "white", fontSize: 18 }}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center", marginTop: 20 }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={{ color: "coral" }}>Login?</Text>
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
