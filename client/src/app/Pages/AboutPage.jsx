import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import gsw from "/gsw.jpg";
import LebronCarry from "/Lebron-Carry.jpg";
import { BsTelegram } from "react-icons/bs";
import BackButton from "../components/Common/Buttons/BackButton";

const AboutPage = () => {
  useEffect(() => {
    toast.dismiss();
  }, []);

  return (
    <>
      <div className="ml-4">
        <BackButton />
      </div>
      <ContentWrapper className=" max-h-screen">
        <div className="relative h-[100vh] overflow-hidden">
          <img
            src={LebronCarry}
            alt="LebronCarry"
            className="hidden sm:block w-full h-full opacity-70 object-cover rounded-sm blurry-shadow"
          />

          <div className="absolute top-0 left-0 right-0 p-12 bg-gray-200 bg-opacity-0 text-sm sm:text-sm md:text-base">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-20 items-center opacity-90">
              <CardWrapper>
                <div className="flex flex-row leading-[26px] justify-center text-justify p-5 items-center flex-wrap justify">
                  <span className="text-justify " style={{ textIndent: "2em" }}>
                    Магазин баскетбольных кроссовок и аксессуаров&nbsp;
                    <NavLink
                      to="/"
                      className="text-[#0f6fd1] font-bold underline"
                    >
                      PROBasket-shoes
                    </NavLink>
                    &nbsp;работает с 2023 года. Мы официально продаем
                    оригинальные кроссовки и аксессуары от ведущих мировых
                    спортивных брендов - Nike, Air Jordan, Adidas, Puma, Under
                    Armour и др. Скоро ожидается новое поступление товаров.{" "}
                    <br />{" "}
                    <div className="underline text-xl text-center font-bold mt-1">
                      Желаем приятных покупок😉🏀!
                    </div>
                  </span>
                </div>
              </CardWrapper>
              <CardWrapper>
                <div className="flex flex-col justify-center text-left p-5 ">
                  <div className="whitespace-nowrap mt-2">
                    <span className="font-bold">Наш телефон:</span>{" "}
                    8-916-887-92-79.
                  </div>
                  <div className="flex items-center justify-start mt-2">
                    По всем вопросам вы можете написать нам в телеграм:
                    <a
                      href="https://t.me/WeST_024"
                      className="ml-1 text-[#0f6fd1]"
                    >
                      <BsTelegram size={30} />
                    </a>
                    .
                  </div>
                  <div className="whitespace-nowrap mt-2">
                    <span className="font-bold">Наша почта:</span>{" "}
                    <a href="alexeywest024@list.ru" className="ml-1 underline">
                      alexeywest024@list.ru
                    </a>
                    .
                  </div>
                </div>
              </CardWrapper>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default AboutPage;
