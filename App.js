import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react/cjs/react.development";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";

export default function App() {
  const [text, setText] = useState("");
  const handleChange = (val) => setText(val);
  return (
    <View>
      {/* Header section */}
      <Header />
      {/* end Header section  */}

      {/* Body section  */}
      <View style={styles.bodyContainer}>
        <Logo />
        <Search handleChange={handleChange} />
      </View>
      {/* end Body section  */}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    // alignItems: "center",
    // justifyContent: "center",
  },
});
