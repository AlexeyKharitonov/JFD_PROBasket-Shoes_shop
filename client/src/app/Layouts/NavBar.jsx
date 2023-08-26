import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import localStorageService from "../Services/localStorage.service";
import NavBarWrapper from "../components/Common/Wrappers/NavBarWrapper";
import CartBlock from "../components/UI/Cart/CartBlock";
import {
  SiNike,
  SiJordan,
  SiAdidas,
  SiPuma,
  SiUnderarmour,
} from "react-icons/si";
import {
  getUsersLoadingStatus,
  getIsLoggedIn,
  getUserById,
} from "../Redux/Users/usersReducer";
import NavProfile from "../components/UI/NavProfile";
import { BsPersonBoundingBox } from "react-icons/bs";

const NavBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const startOpacityAt = 70; // начать уменьшение прозрачности после прокрутки на 300px
      const maxScrollY = 1000; // полная прозрачность при прокрутке на 1000px

      if (currentScrollY <= startOpacityAt) {
        setOpacity(1);
      } else {
        const newOpacity = Math.max(
          1 - (currentScrollY - startOpacityAt) / (maxScrollY - startOpacityAt),
          0.8
        ); // 0.8 - минимальное значение прозрачности
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const userId = localStorageService.getUserId();
  const user = useSelector(getUserById(userId));
  const loading = useSelector(getUsersLoadingStatus());

  const isLoggedIn = useSelector(getIsLoggedIn());

  //это нужно, чтобы при логине не происходило setIsProfileOpen(true)
  useEffect(() => {
    if (userId) {
      setIsProfileOpen(false);
    }
  }, [userId]);

  return (
    <NavBarWrapper>
      <nav className="p-1 bg-[#0f6fd1]" style={{ opacity: opacity }}>
        <div className="container mx-auto px-4 md:px-4 lg:px-8 sm:px-1">
          <div className="flex justify-between items-center text-base">
            <div className="flex items-center md:mx-2 lg:mx-5 text-gray-400">
              <div className=" opacity-80 hidden md:flex  transition-all duration-1000 ease-in-out translate-y-5 animate-fadeInTwo">
                <SiNike size={33} className="mr-1 ml-1" />
                <SiJordan size={33} className="mr-1 ml-1 text-stone-700" />
                <SiAdidas size={33} className="mr-4 ml-1" />
                <SiPuma size={33} className="mr-4 ml-1 text-stone-700" />
                <SiUnderarmour size={33} className="mr-2 ml-1" />
              </div>
              <NavLink to="/">
                <div
                  className="text-[#ffffff]  ml-2 md:ml-4 lg:ml-6 mr-1 text-xl md:text-2xl lg:text-4xl font-bold  hover:text-gray-400 whitespace-nowrap transition-all duration-1000 ease-in-out opacity-0 translate-y-5 animate-fadeIn"
                  style={{
                    fontFamily: "Questrial",
                    fontStyle: "italic",
                    textDecoration: "underline ",
                  }}
                >
                  PRObasket-Shoes
                </div>
              </NavLink>
              <img
                width="66"
                height="66"
                src="https://img.icons8.com/cotton/64/basketball--v3.png"
                alt="basketball--v3"
                className="hidden sm:block transition-all duration-1000 ease-in-out opacity-0 translate-y-5 animate-fadeIn sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
              />
            </div>
            <div className="flex items-center lg:text-base md:text-sm sm:text-xs">
              <NavLink
                to="/"
                className="hover:text-gray-400 hover:scale-105 text-white font-medium mr-2 md:mr-4 lg:mr-9 whitespace-nowrap"
              >
                Главная
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-gray-400 hover:scale-105 text-white font-medium mr-2 md:mr-4 lg:mr-9 whitespace-nowrap"
              >
                О магазине
              </NavLink>
              <NavLink
                to="/feedback"
                className="hover:text-gray-400 hover:scale-105 text-white font-medium mr-2 md:mr-4 lg:mr-9 whitespace-nowrap"
              >
                Отзывы
              </NavLink>
              <div className="flex items-center lg:text-base md:text-sm sm:text-xs">
                {isLoggedIn ? (
                  <>
                    <button onClick={() => setIsProfileOpen(true)}>
                      <div className="flex flex-col items-center">
                        <BsPersonBoundingBox
                          size={28}
                          className="text-[#FCCA3D] hover:text-yellow-600 mb-1  mr-2 md:mr-4 lg:mr-9 whitespace-nowrap"
                        />
                        <div className="hover:text-gray-400 hover:scale-101 text-white  mr-2 md:mr-4 lg:mr-9 whitespace-nowrap border-2 rounded-lg p-0.5 border-gray-300">
                          {!loading && user.login}
                        </div>
                      </div>
                    </button>
                    <NavProfile
                      isOpen={isProfileOpen}
                      user={user ? user.login : ""}
                      loading={loading}
                      onClose={() => setIsProfileOpen(false)}
                    />
                  </>
                ) : (
                  <NavLink
                    to="/auth/login"
                    className="hover:text-gray-400 text-white font-medium mr-2 md:mr-4 lg:mr-9 whitespace-nowrap"
                  >
                    Войти
                  </NavLink>
                )}
              </div>
              <NavLink className=" text-white font-medium ">
                <CartBlock />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </NavBarWrapper>
  );
};

export default NavBar;
