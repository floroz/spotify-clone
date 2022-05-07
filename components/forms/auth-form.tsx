/* eslint-disable jsx-a11y/anchor-is-valid */
import { Flex, Text, Box, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FC, useCallback, VFC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { emailPattern } from "../../lib/validator";
import { FormControlEmail } from "./form-control-email";
import { FormControlPassword } from "./form-control-password";
import { AlertInfo } from "../alert-info";
import { useLoginMutation, useSignupMutation } from "../../hooks/mutations";
import { SubmitButton } from "./submit-button";
import { ROUTES } from "../../lib/constants/routes";

type Mode = "login" | "signup";

const FormLayout: FC<{ mode: Mode; handleSubmit: any }> = ({
  children,
  mode,
  handleSubmit,
}) => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      bg="black"
      color="white"
      justify="center"
      align="center"
    >
      <Flex
        justify="center"
        align="center"
        padding="3.125rem"
        bg="gray.900"
        borderRadius="sm"
        flexDir="column"
        w="31.25rem"
      >
        <Flex justify="center" align="center" mb="3rem">
          <Image src="/traxlogo.svg" height={60} width={120} color="white" />
        </Flex>
        <Box
          as="form"
          noValidate
          onSubmit={handleSubmit}
          display="flex"
          flexDir="column"
          justifyItems="flex-start"
          alignItems="flex-start"
        >
          {children}
          <Box mt={4}>
            <Text>
              {mode === "login"
                ? " You don't have an account?"
                : " You already have an account?"}{" "}
              <NextLink
                href={mode === "login" ? ROUTES.signup : ROUTES.login}
                passHref
              >
                <Link fontWeight="bold" color="green.500">
                  {mode === "login" ? "Signup" : "Login"}
                </Link>
              </NextLink>
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

const LoginForm: VFC = () => {
  const router = useRouter();

  const loginMutation = useLoginMutation({
    onSuccess: () => {
      router.replace(ROUTES.home);
    },
  });

  const onSubmit = useCallback(
    async (e) => {
      try {
        await loginMutation.mutateAsync({
          email: e.email,
          password: e.password,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [loginMutation]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <FormLayout mode="login" handleSubmit={handleSubmit(onSubmit)}>
      <FormControlEmail
        {...register("email", {
          minLength: 3,
          maxLength: 64,
          required: {
            message: "Email is required",
            value: true,
          },
          pattern: {
            message: "Please insert a valid email",
            value: emailPattern,
          },
        })}
        autoComplete="username"
        error={errors?.email}
      />

      <FormControlPassword
        autoComplete="current-password"
        {...register("password", {
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 64,
            message: "Password must be maximum 64 characters",
          },
          required: {
            message: "Password is required",
            value: true,
          },
        })}
        error={errors?.password}
      />
      <SubmitButton isSubmitting={isSubmitting}>Login</SubmitButton>
      {loginMutation.isError && <AlertInfo />}
    </FormLayout>
  );
};

const SignupForm: VFC = () => {
  const router = useRouter();

  const signupMutation = useSignupMutation({
    onSuccess: () => {
      router.replace(ROUTES.home);
    },
  });

  const onSubmit = useCallback(
    async (e) => {
      try {
        await signupMutation.mutateAsync({
          email: e.email,
          password: e.password,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [signupMutation]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <FormLayout mode="signup" handleSubmit={handleSubmit(onSubmit)}>
      <FormControlEmail
        {...register("email", {
          minLength: 3,
          maxLength: 64,
          required: {
            message: "Email is required",
            value: true,
          },
          pattern: {
            message: "Please insert a valid email",
            value: emailPattern,
          },
        })}
        autoComplete="username"
        error={errors?.email}
      />

      <FormControlPassword
        {...register("password", {
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters",
          },
          maxLength: {
            value: 64,
            message: "Password must be maximum 64 characters",
          },
          required: {
            message: "Password is required",
            value: true,
          },
        })}
        autoComplete="new-password"
        error={errors?.password}
      />

      <SubmitButton isSubmitting={isSubmitting}>Sign up</SubmitButton>
      {signupMutation.isError && (
        <AlertInfo message={signupMutation.error.message} />
      )}
    </FormLayout>
  );
};
type Props = {
  mode: Mode;
};

export const AuthForm: VFC<Props> = ({ mode }: Props) => {
  return mode === "signup" ? <SignupForm /> : <LoginForm />;
};
