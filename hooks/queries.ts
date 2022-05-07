import { useQuery, UseQueryOptions } from "react-query";
import { CACHE_KEYS } from "../lib/constants/cache-keys";
import { Playlist, User } from "../lib/models";
import { userService } from "../lib/services/user.service";

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
