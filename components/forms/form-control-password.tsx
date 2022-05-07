import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface FormControlPasswordProps extends InputProps {
  error: undefined | { message?: string };
  // eslint-disable-next-line react/require-default-props
  type?: never;
}

export const FormControlPassword = forwardRef<
  HTMLInputElement,
  FormControlPasswordProps
>(({ error, ...props }, ref) => {
  return (
    <FormControl isInvalid={!!error} mb={4}>
      <FormLabel w="100%">
        Password
        <Input ref={ref} {...props} type="password" />
      </FormLabel>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
});
