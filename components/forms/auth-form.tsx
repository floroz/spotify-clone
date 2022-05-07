import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { FC, useCallback, VFC } from "react";
import Image from "next/image";
import { emailPattern } from "../../lib/validator";
import { FormControlEmail } from "./form-control-email";
import { FormControlPassword } from "./form-control-password";
import { AlertInfo } from "../alert-info";
import { useLoginMutation, useSignupMutation } from "../../lib/mutations";
import { SubmitButton } from "./submit-button";

const FormLayout: FC = ({ children }) => {
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
      >
        <Flex justify="center" align="center" mb="3rem">
          <Image src="/traxlogo.svg" height={60} width={120} color="white" />
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

const LoginForm: VFC = () => {
  const router = useRouter();

  const loginMutation = useLoginMutation();

  const onSubmit = useCallback(
    async (e) => {
      try {
        await loginMutation.mutateAsync({
          email: e.email,
          password: e.password,
        });
        router.replace("/");
      } catch (error) {
        console.error(error);
      }
    },
    [loginMutation, router]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <FormLayout>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
      </form>
      {loginMutation.isError && <AlertInfo />}
    </FormLayout>
  );
};

const SignupForm: VFC = () => {
  const router = useRouter();

  const signupMutation = useSignupMutation();

  const onSubmit = useCallback(
    async (e) => {
      try {
        await signupMutation.mutateAsync({
          email: e.email,
          password: e.password,
        });
        router.replace("/");
      } catch (error) {
        console.error(error);
      }
    },
    [router, signupMutation]
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <FormLayout>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
      </form>
      {signupMutation.isError && (
        <AlertInfo message={signupMutation.error.message} />
      )}
    </FormLayout>
  );
};
type Props = {
  mode: "login" | "signup";
};

export const AuthForm: VFC<Props> = ({ mode }: Props) => {
  return mode === "signup" ? <SignupForm /> : <LoginForm />;
};
