import { AxiosError } from "axios";
import { apiClient } from "../api-client";
import { API_ENDPOINTS } from "../constants/endpoints";
import { User } from "../models";

export type UserPayload = {
  email: string;
  password: string;
};

const logout = () =>
  apiClient
    .post<void>(API_ENDPOINTS.logout)
    .then((res) => res.data)
    .catch(() => {
      return Promise.reject(new Error("Something went wrong"));
    });

const signup = (body: UserPayload) =>
  apiClient
    .post<User>(API_ENDPOINTS.signup, body)
    .then((res) => res.data)
    .catch(() => {
      return Promise.reject(new Error("Something went wrong"));
    });

const login = (body: UserPayload) =>
  apiClient
    .post<User>(API_ENDPOINTS.login, body)
    .then((res) => res.data)
    .catch((e: AxiosError) => {
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
