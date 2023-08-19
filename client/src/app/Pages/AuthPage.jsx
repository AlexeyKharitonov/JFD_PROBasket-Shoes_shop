import React from "react";
import { Navigate, useParams } from "react-router-dom";
import LoginPage from "../components/UI/Form/LoginPage";
import RegisterPage from "../components/UI/Form/RegisterPage";

const AuthPage = () => {
  const { type } = useParams();
  switch (type) {
    case "login":
      return <LoginPage />;
    case "register":
      return <RegisterPage />;
    default:
      return <Navigate to="/" />;
  }
};

export default AuthPage;
