import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface FormControlEmailProps extends InputProps {
  error: undefined | { message?: string };
  // eslint-disable-next-line react/require-default-props
  type?: never;
}

export const FormControlEmail = forwardRef<
  HTMLInputElement,
  FormControlEmailProps
>(({ error, ...props }, ref) => {
  return (
    <FormControl isInvalid={!!error} mb={4}>
      <FormLabel>
        Email
        <Input
          placeholder="Please add your email"
          ref={ref}
          {...props}
          type="email"
        />
      </FormLabel>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
});
