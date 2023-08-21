import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../Redux/Users/usersReducer";
import { Loader as Spinner } from "../components/Common/Loader";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(logOut());
    navigate("/");
  }, []);
  return <Spinner />;
};

export default Logout;
