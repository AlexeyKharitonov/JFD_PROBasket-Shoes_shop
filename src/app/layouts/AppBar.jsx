import { SiNike, SiJordan, SiAdidas } from "react-icons/si";
import NavBarWrapper from "../components/Common/Wrappers/NavBarWrapper";
import { NavLink } from "react-router-dom";
import CartBlock from "../components/UI/Cart/CartBlock";

export const AppBar = () => {
  return (
    <NavBarWrapper>
      <nav className="p-1 bg-[#0f6fd1]">
        <div className="flex justify-between items-center text-base">
          <div className="flex items-center mx-5 text-gray-400">
            <div className="flex opacity-80">
              <SiNike size={33} className="mr-1 ml-1" />
              <SiJordan size={33} className="mr-1 ml-1 text-stone-700" />
              <SiAdidas size={33} className="mr-4 ml-1" />
            </div>
            <NavLink to="/">
              <div
                className="text-[#ffffff] ml-6 mr-1 text-4xl font-bold hover:text-gray-400"
                style={{
                  fontFamily: "Questrial",
                  fontStyle: "italic",
                  textDecoration: "underline ",
                }}
              >
                PROBasket-Shoes
              </div>
            </NavLink>
            <img
              width="66"
              height="66"
              src="https://img.icons8.com/cotton/64/basketball--v3.png"
              alt="basketball--v3"
            />
          </div>
          <span className="flex items-center text-base"></span>
          <span className="flex items-center text-base mr-10">
            <div>
              <NavLink
                to="/"
                className="hover:text-gray-400 text-white font-medium mr-9"
              >
                Главная
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-gray-400 text-white font-medium mr-9"
              >
                О магазине
              </NavLink>
            </div>
            <NavLink
              to="/auth/login"
              className="hover:text-gray-400 text-white font-medium mr-9"
            >
              Войти
            </NavLink>
            <NavLink
              // to="/cart"
              className="hover:text-gray-400 text-white font-medium mr-9"
            >
              <CartBlock />
            </NavLink>
          </span>
        </div>
      </nav>
    </NavBarWrapper>
  );
};
