import { PriceCategory } from "./types";

export const makeupPrices: PriceCategory = {
  id: "makeup",
  title: "Макияж",

  items: [
    {
      id: "day-makeup",
      name: "Дневной макияж",
      price: 120,
    },

    {
      id: "evening-makeup",
      name: "Вечерний макияж",
      price: 140,
    },

    {
      id: "wedding-makeup",
      name: "Свадебный макияж",
      price: 180,
    },

    {
      id: "trial-wedding-makeup",
      name: "Репетиция свадебного макияжа",
      price: 140,
    },

    {
      id: "eyelashes",
      name: "Накладные ресницы",
      price: 20,
    },
  ],
};