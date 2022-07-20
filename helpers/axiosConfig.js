import axios from "axios";

const instance = axios.create({
  baseURL: "https://a2medicalsupply.com/api/v1",
  //Testing for all available methods which can access localhost
  // baseURL: "http://10.0.2.2:8000/api/v1",
  // baseURL: "https://genevacaring.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
});

export default instance;
