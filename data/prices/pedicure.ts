import { PriceCategory } from "./types";

export const pedicurePrices: PriceCategory = {
  id: "pedicure",
  title: "Педикюр",

  items: [
    {
      id: "classic-pedicure",
      name: "Педикюр без покрытия",
      price: 60,
    },

    {
      id: "gel-pedicure",
      name: "Педикюр + покрытие гель-лаком",
      price: 90,
    },

    {
      id: "toes-only",
      name: "Обработка пальцев ног",
      price: 45,
    },

    {
      id: "heels-only",
      name: "Обработка стоп",
      price: 45,
    },

    {
      id: "ingrown-nail",
      name: "Обработка вросшего ногтя",
      price: 20,
    },
  ],
};