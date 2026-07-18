import { PriceCategory } from "./types";

export const cosmetologyPrices: PriceCategory = {
  id: "cosmetology",
  title: "Косметология",

  items: [
    {
      id: "mesotherapy",
      name: "Мезотерапия",
      options: [
        {
          name: "Микронидлинг (мезотерапия) с сывороткой или витаминным коктейлем, маска, крем (60 мин)",
          price: 96,
        },
      ],
    },

    {
      id: "manual-face-massage",
      name: "Мануальный массаж лица",
      price: 35,
    },

    {
      id: "carboxytherapy",
      name: "Карбокситерапия",
      options: [
        {
          name: "Препаратами «Medicare»",
          price: 120,
        },
      ],
    },

    {
      id: "combined-cleansing",
      name: "Комбинированная чистка лица",
      options: [
        {
          name: "Ультразвуковая, механическая",
          price: 96,
        },
      ],
    },

    {
      id: "mesotherapy-peeling",
      name: "Мезотерапия + пилинг по типу кожи",
      price: 120,
    },

    {
      id: "mesotherapy-biorepeel",
      name: "Мезотерапия + Bio RePeel CI3",
      options: [
        {
          name: "Массаж + мезотерапия + пилинг Bio RePeel CI3",
          price: 143,
        },
      ],
    },

    {
      id: "skin-peeling",
      name: "Пилинг по типу кожи",
      options: [
        {
          name: "Молочный, миндальный, азелаиновый, феруловый",
          price: 62,
        },
      ],
    },

    {
      id: "retinoic-peeling",
      name: "Ретиноевый пилинг",
      price: 98,
    },

    {
      id: "nine-step-cleansing",
      name: "9-этапная чистка лица",
      options: [
        {
          name: "Очищение, тонизирование, AHA-пилинг, гидрирование, уз-чистка, механическая чистка, маска, защитный крем",
          price: 120,
        },
      ],
    },

    {
      id: "serums",
      name: "Сыворотки и концентраты",
      options: [
        {
          name: "Дополнительно к услугам",
          price: 35,
        },
      ],
    },

    {
      id: "alginate-mask",
      name: "Альгинатные маски",
      options: [
        {
          name: "Дополнительно к процедурам",
          price: 35,
        },
      ],
    },

    {
      id: "classic-face-massage",
      name: "Массаж лица (классический лимфодренажный)",
      price: 53,
    },

    {
      id: "plastic-face-massage",
      name: "Пластический массаж лица",
      price: 71,
    },

    {
      id: "jacquet-massage",
      name: "Массаж по Жаке",
      price: 35,
    },

    {
      id: "fractional-mesotherapy",
      name: "Фракционная мезотерапия кожи",
      price: 71,
    },
  ],
};