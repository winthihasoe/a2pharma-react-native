import { StyleSheet, View, ActivityIndicator, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./routes/Home";
import AllDrugs from "./routes/AllDrugs";
import AddDrug from "./routes/AddDrug";
import ShowDrug from "./routes/ShowDrug";
import DoctorDrugs from "./routes/DoctorDrugs";

import LoginScreen from "./routes/Auth/LoginScreen";
import RegisterScreen from "./routes/Auth/RegisterScreen";

import { AuthContext, AuthProvider } from "./context/AuthProvider";
import { useState, useContext } from "react";
import { useEffect } from "react";
import * as SecureStore from "expo-secure-store";

const Root = () => {
  const Stack = createNativeStackNavigator();

  const { logout } = useContext(AuthContext);

  const HomeStackNavigator = () => {
    return (
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
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome",
            headerRight: () => (
              <Button onPress={logout} title="Logout" color="red" />
            ),
          }}
        />

        <Stack.Screen
          name="AddDrug"
          component={AddDrug}
          options={{ title: "Add New Drug" }}
        />

        <Stack.Screen
          name="AllDrugs"
          component={AllDrugs}
          options={{ title: "All Drugs in Retail Price" }}
        />

        <Stack.Screen
          name="ShowDrug"
          component={ShowDrug}
          options={{ title: "A2 Pharmacy" }}
        />

        <Stack.Screen
          name="DoctorDrugs"
          component={DoctorDrugs}
          options={{ title: "All Drugs in Doctor Price" }}
        />
      </Stack.Navigator>
    );
  };
  const AuthStackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{ headerShown: false, headerBackTitleVisible: false }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const [isLoading, setIsLoading] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    // check if user is logged in or not
    //check securestore fof the user object/token
    SecureStore.getItemAsync("user")
      .then((userString) => {
        if (userString) {
          setUser(JSON.parse(userString));
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <>
      {user ? (
        <NavigationContainer>
          <HomeStackNavigator />
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#ddd",
  },
});

export default Root;
