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
  try {
    const response = await axios.post(
      "http://localhost:8080/api/login",
      dataSend,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const token = response.data.token;
    localStorage.setItem("token", token);
    toast.success(response.data.successMessage);
    return true;
  } catch (error) {
    toast.error(error.response.data.errMessage);
    return false;
  }
};

export const reqAccount = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/account");
    const username = response.data.username;
    toast.success(response.data.successMessage);
    return username;
  } catch (error) {
    console.error("Error fetching account data:", error);
    throw error;
  }
};

export const reqLogout = async () => {
  try {
    await axios.get("http://localhost:8080/api/logout").then((response) => {
      toast.success(response.data.successMessage);
    });
  } catch (error) {
    console.error("Error fetching account data:", error);
    throw error;
  }
};

export const reqForgotPassword = async (dataSend) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/forgot-password",
      dataSend,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.data.successMessage) {
      toast.success(response.data.successMessage);
    }
  } catch (error) {
    toast.error(error.response.data.errMessage);
  }
};

export const reqResetPassword = async (dataSend, token) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/reset-password",
      { dataSend, token },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    if (response.status === 200 && response.data.redirectUrl) {
      window.location.href = response.data.redirectUrl;
    }
  } catch (error) {
    toast.error(error.response.data.errMessage);
  }
};
