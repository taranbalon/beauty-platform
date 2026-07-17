import { PriceCategory } from "./types";

export const hairPrices: PriceCategory = {
  id: "hair",
  title: "Парикмахерские услуги",

  items: [
    {
      name: "Мелирование волос",
      options: [
        {
          name: "Короткие волосы",
          price: 240,
          vipPrice: 260,
        },
        {
          name: "Средние волосы",
          price: 260,
          vipPrice: 278,
        },
        {
          name: "Длинные волосы",
          price: 300,
          vipPrice: 323,
        },
      ],
    },

    {
      name: "Капсульный уход Keune",
      options: [
        {
          name: "Средние волосы",
          price: 60,
        },
        {
          name: "Длинные волосы",
          price: 80,
        },
      ],
    },

    {
      name: "Смывка краски нейтрализатором",
      price: 141,
    },

    {
      name: "Окрашивание в один тон",
      options: [
        {
          name: "Короткие волосы",
          price: 170,
          vipPrice: 183,
        },
        {
          name: "Средние волосы",
          price: 210,
          vipPrice: 224,
        },
        {
          name: "Длинные волосы",
          price: 260,
          vipPrice: 276,
        },
      ],
    },
  ],
};