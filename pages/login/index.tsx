import React from "react";
import { AuthForm } from "../../components/forms/auth-form";

const LoginPage = () => {
  return <AuthForm mode="login" />;
};

LoginPage.noLayout = true;

export default LoginPage;
