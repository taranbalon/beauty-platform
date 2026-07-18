import { PriceCategory } from "./types";

export const depilationPrices: PriceCategory = {
  id: "depilation",
  title: "Депиляция",

  items: [
    {
      id: "women",
      name: "Женская депиляция",
      options: [
        { name: "Верхняя губа", price: 15 },
        { name: "Подбородок", price: 15 },
        { name: "Подмышечные впадины", price: 30 },
        { name: "Руки до локтя", price: 30 },
        { name: "Руки полностью", price: 40 },
        { name: "Голени", price: 35 },
        { name: "Бедра", price: 40 },
        { name: "Ноги полностью", price: 60 },
        { name: "Бикини классическое", price: 40 },
        { name: "Бикини глубокое", price: 55 },
      ],
    },

    {
      id: "men",
      name: "Мужская депиляция",
      options: [
        { name: "Подмышечные впадины", price: 35 },
        { name: "Спина", price: 60 },
        { name: "Грудь", price: 45 },
        { name: "Живот", price: 35 },
        { name: "Руки полностью", price: 45 },
        { name: "Ноги полностью", price: 70 },
      ],
    },
  ],
};