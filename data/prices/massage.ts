import { PriceCategory } from "./types";

export const massagePrices: PriceCategory = {
  id: "massage",
  title: "Массаж",

  items: [
    {
      id: "massage-classic",
      name: "Классический массаж",
      options: [
        {
          name: "45 мин",
          price: 71,
        },
        {
          name: "60 мин",
          price: 80,
        },
      ],
    },

    {
      id: "massage-back",
      name: "Спина",
      options: [
        {
          name: "Шейный, грудной и поясничный отдел (45 мин)",
          price: 53,
        },
        {
          name: "Шейный, грудной и поясничный отдел (60 мин)",
          price: 62,
        },
      ],
    },

    {
      id: "massage-neck",
      name: "Шейно-воротниковая зона",
      options: [
        {
          name: "45 мин",
          price: 44,
        },
      ],
    },
  ],
};