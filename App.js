import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./routes/Home";
import AllDrugs from "./routes/AllDrugs";
import AddDrug from "./routes/AddDrug";
import ShowDrug from "./routes/ShowDrug";
import Login from "./routes/Login";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "coral",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
          orientation: "portrait",
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "A2 Pharmacy" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="AllDrugs"
          component={AllDrugs}
          options={{ title: "All Drugs" }}
        />
        <Stack.Screen
          name="AddDrug"
          component={AddDrug}
          options={{ title: "Add New Drug" }}
        />
        <Stack.Screen
          name="ShowDrug"
          component={ShowDrug}
          options={{ title: "A2 Pharmacy" }}
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
