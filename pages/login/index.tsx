import React from "react";
import { AuthForm } from "@feature-auth-page";

const LoginPage = () => {
  return <AuthForm mode="login" />;
};

LoginPage.noLayout = true;

export default LoginPage;
