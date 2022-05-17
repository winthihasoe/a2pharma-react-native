import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./routes/Home";
import AllDrugs from "./routes/AllDrugs";
import AddDrug from "./routes/AddDrug";

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
        <Stack.Screen
          name="AddDrug"
          component={AddDrug}
          options={{ title: "Add New Drug" }}
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
