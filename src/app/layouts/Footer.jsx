const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 text-white">
      <div className="py-6 justify-between text-sm font-medium items-center text-center">
        {currentYear} © ООО «PROBasket-Shoes». Все права защищены. Информация на
        сайте не является публичной офертой согласно Ст. 437 ГК РФ
      </div>
    </footer>
  );
};

export default Footer;
