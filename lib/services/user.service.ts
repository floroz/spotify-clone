import { apiClient } from "../api-client";
import { API_ENDPOINTS } from "../constants/endpoints";

const get = () => {
  return apiClient.get(API_ENDPOINTS.getUser).catch(() => {
    return Promise.reject(new Error("Something went wrong"));
  });
};

export const userService = {
  get,
};
