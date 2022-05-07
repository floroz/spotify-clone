import { useMutation, UseMutationOptions } from "react-query";
import { authService, UserPayload } from "./auth-service";

export const useLoginMutation = (
  options?: Omit<
    UseMutationOptions<unknown, Error, UserPayload, unknown>,
    "mutationFn"
  >
) => {
  return useMutation<unknown, Error, UserPayload>(authService.login, options);
};

export const useSignupMutation = (
  options?: Omit<
    UseMutationOptions<unknown, Error, UserPayload, unknown>,
    "mutationFn"
  >
) => {
  return useMutation<unknown, Error, UserPayload>(authService.signup, options);
};
