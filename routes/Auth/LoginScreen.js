import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const submit = () => {
    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "#222",
            marginBottom: 30,
          }}
        >
          Login
        </Text>
        <Text style={styles.labelFor}>Username</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          autoFocus
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <Text style={styles.labelFor}>Password</Text>
        <TextInput
          style={styles.inputField}
          autoCorrect={false}
          clearButtonMode="while-editing"
          keyboardType="numeric"
          secureTextEntry={true}
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <Button
          onPress={() => login(email, password)}
          title="Submit"
          color="coral"
        />
        <Text>{email}</Text>
        <Text>{password}</Text>
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
    marginTop: 100,
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
  },
});
