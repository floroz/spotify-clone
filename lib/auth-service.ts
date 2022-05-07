import axios, { AxiosError } from "axios";

export type UserPayload = {
  email: string;
  password: string;
};

const logout = () =>
  axios.post("/api/auth/logout").catch(() => {
    return Promise.reject(new Error("Something went wrong"));
  });

const signup = (body: UserPayload) =>
  axios.post("/api/auth/signup", body).catch(() => {
    return Promise.reject(new Error("Something went wrong"));
  });

const login = (body: UserPayload) =>
  axios.post("/api/auth/login", body).catch((e: AxiosError) => {
    if (e.status === "401") {
      return Promise.reject(new Error("Invalid username or password"));
    }
    return Promise.reject(new Error("Something went wrong"));
  });

export const authService = {
  login,
  signup,
  logout,
};
