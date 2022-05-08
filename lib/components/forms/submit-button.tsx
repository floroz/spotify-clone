import { Button, Spinner, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

export const SubmitButton: FC<{ isSubmitting: boolean } & ButtonProps> = ({
  children,
  isSubmitting,
  ...props
}) => {
  return (
    <Button
      colorScheme="green"
      {...props}
      type="submit"
      rightIcon={isSubmitting ? <Spinner /> : null}
      isDisabled={isSubmitting}
    >
      {children}
    </Button>
  );
};
