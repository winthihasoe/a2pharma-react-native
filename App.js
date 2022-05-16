import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./routes/Home";
import AllDrugs from "./routes/AllDrugs";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="AllDrugs"
          component={AllDrugs}
          options={{ title: "All drugs" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#ddd",
  },
});

export default App;
