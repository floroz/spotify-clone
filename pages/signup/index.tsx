import React from "react";
import { AuthForm } from "@feature-auth-page";

const SignupPage = () => {
  return <AuthForm mode="signup" />;
};

SignupPage.noLayout = true;

export default SignupPage;
