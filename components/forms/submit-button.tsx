import { Button, Spinner } from "@chakra-ui/react";
import { FC } from "react";

export const SubmitButton: FC<{ isSubmitting: boolean }> = ({
  children,
  isSubmitting,
}) => {
  return (
    <Button
      type="submit"
      rightIcon={isSubmitting ? <Spinner /> : null}
      isDisabled={isSubmitting}
      alignSelf="stretch"
      colorScheme="green"
    >
      {children}
    </Button>
  );
};
