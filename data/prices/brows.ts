import { PriceCategory } from "./types";

export const browsPrices: PriceCategory = {
  id: "brows",
  title: "Брови",

  items: [
    {
      id: "brow-shaping",
      name: "Коррекция бровей",
      price: 30,
    },

    {
      id: "brow-color",
      name: "Окрашивание бровей",
      price: 25,
    },

    {
      id: "brow-shaping-color",
      name: "Коррекция + окрашивание бровей",
      price: 45,
    },

    {
      id: "brow-lamination",
      name: "Ламинирование бровей",
      price: 65,
    },

    {
      id: "brow-lamination-color",
      name: "Ламинирование + коррекция + окрашивание",
      price: 85,
    },
  ],
};