import { AxiosError } from "axios";
import { apiClient } from "../api-client";
import { API_ENDPOINTS } from "../constants/endpoints";

export type UserPayload = {
  email: string;
  password: string;
};

const logout = () =>
  apiClient.post(API_ENDPOINTS.logout).catch(() => {
    return Promise.reject(new Error("Something went wrong"));
  });

const signup = (body: UserPayload) =>
  apiClient.post(API_ENDPOINTS.signup, body).catch(() => {
    return Promise.reject(new Error("Something went wrong"));
  });

const login = (body: UserPayload) =>
  apiClient.post(API_ENDPOINTS.login, body).catch((e: AxiosError) => {
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
