import { BsInstagram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsWhatsapp } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#545F72] text-white py-5 z-50 ">
      <div className=" justify-center text-center flex items-center lg:text-base md:text-sm sm:text-xs font-normal pb-4 md:pb-7  ">
        {currentYear} © ООО «PROBasket-Shoes». Все права защищены. Информация на
        сайте не является публичной офертой согласно Ст. 437 ГК РФ
      </div>
      <div className="justify-center text-sm font-medium items-center text-center ">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="https://www.instagram.com/result.school.it/">
              <BsInstagram
                size={24}
                className=" md:w-[33px] md:h-[33px] text-[#e1336c] opacity-90 hover:brightness-75 transition duration-300 hover:opacity-100"
              />
            </a>
          </li>
          <li>
            <a href="https://vk.com/result.school">
              <SlSocialVkontakte
                size={24}
                className="md:w-[33px] md:h-[33px] text-[#2787F5] opacity-90 hover:brightness-75 transition duration-300 hover:opacity-100"
              />
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com/">
              <BsWhatsapp
                size={24}
                className="md:w-[33px] md:h-[33px] text-[#25D366] opacity-90 hover:brightness-75 transition duration-300 hover:opacity-100"
              />
            </a>
          </li>
          <li>
            <a href="https://t.me/WeST_024">
              <SiTelegram
                size={24}
                className="md:w-[33px] md:h-[33px] text-[#0088CC] opacity-90 hover:brightness-75 transition duration-300 hover:opacity-100"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
