import { apiClient } from "../api-client";
import { API_ENDPOINTS } from "../constants/endpoints";
import { User } from "../models";

const get = (): Promise<User> => {
  return apiClient
    .get(API_ENDPOINTS.getUser)
    .then((res) => res.data)
    .catch(() => {
      return Promise.reject(new Error("Something went wrong"));
    });
};

export const userService = {
  get,
};
