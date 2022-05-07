import { Button, Spinner } from "@chakra-ui/react";
import { FC } from "react";

export const SubmitButton: FC<{ isSubmitting: boolean }> = ({
  children,
  isSubmitting,
}) => {
  return (
    <Button
      type="submit"
      color="white"
      rightIcon={isSubmitting ? <Spinner /> : null}
      bg="green.500"
      isDisabled={isSubmitting}
    >
      {children}
    </Button>
  );
};
