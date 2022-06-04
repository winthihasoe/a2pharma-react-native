import axios from "axios";
import { Platfrom } from "react-native";

const instance = axios.create({
  baseURL: "http://10.0.2.2:8000/api",
  // baseURL: "http://localhost:8000/api",
});

export default instance;
