import { PriceCategory } from "./types";

export const manicurePrices: PriceCategory = {
  id: "manicure",
  title: "Маникюр",

  items: [
    {
      id: "classic-manicure",
      name: "Маникюр без покрытия",
      price: 40,
    },

    {
      id: "gel-polish",
      name: "Маникюр + покрытие гель-лаком",
      price: 70,
    },

    {
      id: "strengthening",
      name: "Укрепление ногтей",
      price: 15,
    },

    {
      id: "repair",
      name: "Ремонт ногтя",
      price: 5,
    },

    {
      id: "french",
      name: "Французский маникюр",
      price: 15,
    },

    {
      id: "design",
      name: "Дизайн ногтей",
      price: 5,
    },

    {
      id: "removal",
      name: "Снятие покрытия",
      price: 15,
    },

    {
      id: "extension",
      name: "Наращивание ногтей",
      price: 110,
    },

    {
      id: "correction",
      name: "Коррекция наращенных ногтей",
      price: 90,
    },
  ],
};