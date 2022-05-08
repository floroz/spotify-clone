import { useQuery, UseQueryOptions } from "react-query";
import { Playlist, User } from "@models";
import { CACHE_KEYS } from "@constants";
import { userService } from "@services";

export const useUserQuery = (
  options?: UseQueryOptions<User, unknown, User, string>
) => {
  return useQuery(CACHE_KEYS.userMe, userService.getMe, options);
};

export const usePlaylistQuery = (
  options?: UseQueryOptions<Playlist[], unknown, Playlist[], string>
) => {
  return useQuery(CACHE_KEYS.playlist, userService.getPlaylist, options);
};
