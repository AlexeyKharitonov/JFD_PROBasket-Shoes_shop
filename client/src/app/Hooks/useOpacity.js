import { useEffect, useState } from "react";

export const useOpacity = () => {
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

  return { opacity };
};
