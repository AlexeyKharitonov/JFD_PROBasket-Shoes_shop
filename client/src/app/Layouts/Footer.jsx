import { BsInstagram } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsWhatsapp } from "react-icons/bs";
import { SiTelegram } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-white py-5">
      <div className=" justify-between text-sm font-medium items-center text-center pb-7  ">
        {currentYear} © ООО «PROBasket-Shoes». Все права защищены. Информация на
        сайте не является публичной офертой согласно Ст. 437 ГК РФ
      </div>
      <div className="justify-center text-sm font-medium items-center text-center ">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="https://www.instagram.com/">
              <BsInstagram size={27} />
            </a>
          </li>
          <li>
            <a href="https://vk.com/im">
              <SlSocialVkontakte size={27} />
            </a>
          </li>
          <li>
            <a href="https://www.whatsapp.com/">
              <BsWhatsapp size={27} />
            </a>
          </li>
          <li>
            <a href="https://t.me/">
              <SiTelegram size={27} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
