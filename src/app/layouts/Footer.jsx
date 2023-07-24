const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white">
      <div className="py-8 justify-between text-sm items-center text-center">
        2022 - {currentYear} © ООО «PROBasket-Shoes» Все права защищены.
        Информация на сайте не является публичной офертой согласно Ст. 437 ГК РФ
      </div>
    </footer>
  );
};

export default Footer;
