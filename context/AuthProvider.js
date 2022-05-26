import { createContext, useState } from "react";
import * as SecureStore from "expo-secure-store";
import axiosConfig from "../helpers/axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        error,
        login: (email, password) => {
          //communicate with backend and store token in SecureStore
          setIsLoading(true);
          axiosConfig
            .post("/login", {
              email,
              password,
              device_name: "mobile",
            })
            .then((response) => {
              const userResponse = {
                token: response.data.token,
                id: response.data.user.id,
                name: response.data.user.name,
                email: response.data.user.email,
              };
              setUser(userResponse);
              setError(null);
              SecureStore.setItemAsync("user", JSON.stringify(userResponse));
              setIsLoading(false);
            })
            .catch((error) => {
              console.log(error.response);
              setError(error.response.data.message);
              setIsLoading(false);
            });
        },
        logout: () => {
          setIsLoading(true);
          axiosConfig.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${user.token}`;
          axiosConfig
            .post("/logout")
            .then((response) => {
              setUser(null);
              SecureStore.deleteItemAsync("user");
              setError(null);
              setIsLoading(false);
              console.log("logout");
            })
            .catch((error) => {
              console.log(error.response);
              setError(error.response.data.message);
              setIsLoading(false);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
