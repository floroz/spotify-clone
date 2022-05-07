import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { VFC } from "react";

type Props = {
  title?: string;
  message?: string;
};

export const AlertInfo: VFC<Props> = ({
  title = "Error",
  message = "Something went wrong, please try again",
}) => {
  return (
    <Alert bg="white" mt={4}>
      <AlertIcon color="red.500" />
      <AlertTitle color="red.500">{title}</AlertTitle>
      <AlertDescription color="gray.800">{message}</AlertDescription>
    </Alert>
  );
};
