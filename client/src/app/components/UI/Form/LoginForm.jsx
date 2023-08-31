import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import TextField from "../../Common/Inputs/TextField";
import Button from "../../Common/Buttons/Button";
import { useDispatch } from "react-redux";
import {
  allErrors,
  getIsLoggedIn,
  login,
  getUsersLoadingStatus,
  authResetErrors,
} from "../../../Redux/Users/usersReducer";
import { Loader as Spinner } from "../../Common/Loader";
import { toast } from "react-toastify";
import BackButton from "../../Common/Buttons/BackButton";
import Russ from "/Russ.jpg";
import { BiLogInCircle } from "react-icons/bi";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelick = () => {
    navigate("/auth/register");
  };
  const currentError = useSelector(allErrors());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const loadingStatus = useSelector(getUsersLoadingStatus());

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      reset();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    toast.dismiss();
  }, []);

  useEffect(() => {
    dispatch(authResetErrors());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (errors.login && errors.password) {
      toast.error("Пожалуйста, войдите", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [errors]);

  const onSubmit = (data, event) => {
    event.preventDefault();
    // dispatch(setIsAdmin({ isAdminChecked }));
    dispatch(login(data));
  };

  if (loadingStatus) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="hidden md:block relative h-screen">
        <img
          src={Russ}
          alt="Russ"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-80 blurry-shadow"
        />
      </div>

      <div className=" flex flex-col justify-start my-28">
        <div className="ml-3.5">
          <BackButton />
        </div>
        <form
          className="max-w-[450px] w-full mx-auto bg-[#EEEEEE] p-8 rounded-3xl shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-5xl font-semibold text-left py-2">Вход</h2>
          <TextField
            name="login"
            label="Логин"
            placeholder="Логин"
            register={register}
            rules={{
              required: "Логин обязателен",
              minLength: {
                value: 4,
                message: "Логин должен содержать минимум 4 символа",
              },
            }}
            error={errors.login}
          />

          <TextField
            name="password"
            label="Пароль"
            placeholder="Пароль"
            type="password"
            register={register}
            rules={{
              required: "Пароль обязателен",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов",
              },
            }}
            error={errors.password}
          />
          <Button
            classes={
              "border w-full mt-4 mb-3 bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300"
            }
            size="btnMedium"
          >
            Войти
          </Button>
          {currentError && (
            <p className="text-red-600 text-sm my-2 px-1.5">{currentError}</p>
          )}

          <div className=" items-start text-base">
            <div className="flex justify-end opacity-80 text-[#0f6fd1] hover:text-[#0b5eb3] font-semibold flex-col items-end underline decoration-[#0f6fd1]">
              <span className="flex items-center">
                <BiLogInCircle size={48} color="#F56344" className="mr-2" />
                <button onClick={handlelick} type="button">
                  <p>У вас нет аккаунта?</p>
                  <p>Зарегистрируйтесь</p>
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
