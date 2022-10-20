import axios from "axios";

const instance = axios.create({
  headers: {
    auth: localStorage.getItem("token") || "",
    "Content-Type": "application/json",
  },
});

export default instance;