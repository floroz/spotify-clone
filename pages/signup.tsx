import React from "react";
import { AuthForm } from "../components/forms/auth-form";

const SignupPage = () => {
  return <AuthForm mode="signup" />;
};

SignupPage.noLayout = true;

export default SignupPage;
