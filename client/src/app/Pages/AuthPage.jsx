import React from "react";
import { Navigate, useParams } from "react-router-dom";
import LoginForm from "../components/UI/Form/LoginForm";
import RegisterForm from "../components/UI/Form/RegisterForm";

const AuthPage = () => {
  const { type } = useParams();
  switch (type) {
    case "login":
      return <LoginForm />;
    case "register":
      return <RegisterForm />;
    default:
      return <Navigate to="/" />;
  }
};

export default AuthPage;
