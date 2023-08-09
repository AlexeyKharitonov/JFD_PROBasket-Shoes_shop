import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import LoginPage from "../components/UI/LoginPage";
import RegisterPage from "../components/UI/RegisterPage";

const Auth = () => {
  const { type } = useParams();
  if (type !== "login" && type !== "register") return <Navigate to="/" />;
  return <>{type === "login" ? <LoginPage /> : <RegisterPage />}</>;
};

export default Auth;
