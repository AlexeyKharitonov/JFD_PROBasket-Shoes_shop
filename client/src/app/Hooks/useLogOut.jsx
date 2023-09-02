import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../Redux/Users/usersReducer";
import { HttpService } from "../Services/http.service";

const useLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const onError = (error) => {
      dispatch(logOut());
      navigate("/");
      console.log(error);
    };
    HttpService(onError);
  }, []);

  return null;
};

export default useLogOut;
