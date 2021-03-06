import { Playlist, User } from "@models";
import { API_ENDPOINTS } from "@constants";
import { apiClient } from "./api-client.service";

const getMe = (): Promise<User> => {
  return apiClient
    .get(API_ENDPOINTS.me)
    .then((res) => res.data)
    .catch(() => {
      return Promise.reject(new Error("Something went wrong"));
    });
};

export const getPlaylist = () => {
  return apiClient
    .get<Playlist[]>(API_ENDPOINTS.playlist)
    .then((res) => res.data)
    .catch(() => {
      return Promise.reject(new Error("Something went wrong"));
    });
};

export const userService = {
  getMe,
  getPlaylist,
};
