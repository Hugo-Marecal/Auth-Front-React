import axios from "axios";
import { toast } from "react-toastify";

// axios.defaults.withCredentials = true;

export const reqRegister = async (dataSend) => {
  await axios
    .post("http://localhost:8080/api/signup", dataSend, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      toast.success(response.data.successMessage);
    })
    .catch((error) => {
      toast.error(error.response.data.errMessage);
    });
};

export const reqLogin = async (dataSend) => {
  await axios
    .post("http://localhost:8080/api/login", dataSend, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const token = response.data.token;
      localStorage.setItem("token", token);
      // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      toast.success(response.data.successMessage);
    })
    .catch((error) => {
      toast.error(error.response.data.errMessage);
    });
};

export const reqAccount = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/account");
    const username = response.data.username;
    toast.success(response.data.successMessage);
    return username;
  } catch (error) {
    console.error("Error fetching account data:", error);
    throw error; // Renvoyer l'erreur pour la gérer en amont si nécessaire
  }
};

export const reqLogout = async () => {
  try {
    await axios.get("http://localhost:8080/api/logout").then((response) => {
      toast.success(response.data.successMessage);
    });
  } catch (error) {
    console.error("Error fetching account data:", error);
    throw error; // Renvoyer l'erreur pour la gérer en amont si nécessaire
  }
};
