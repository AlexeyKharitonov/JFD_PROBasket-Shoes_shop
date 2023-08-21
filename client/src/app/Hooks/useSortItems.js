import { useState, useMemo } from "react";

export const useSortedItems = (items = []) => {
  const [sortedType, setSortedType] = useState("По новизне");

  const sortedItems = useMemo(() => {
    switch (sortedType) {
      case "По новизне":
        return [...items];
        break;
      case "По цене: по возрастанию":
        return [...items].sort((a, b) => a.price - b.price);
        break;
      case "По цене: по убыванию":
        return [...items].sort((a, b) => b.price - a.price);
        break;
    }
  }, [items, sortedType]);

  return { sortedItems, setSortedType };
};
