import { PriceCategory } from "./types";

export const hairPrices: PriceCategory = {
  id: "hair",
  title: "Парикмахерские услуги",

  items: [
    {
      id: "hair-highlighting",
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
      id: "hair-keune",
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
      id: "hair-remover",
      name: "Смывка краски нейтрализатором",
      price: 141,
    },

    {
      id: "hair-color",
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

    {
      id: "hair-k18",
      name: "Уходовая процедура K18",
      options: [
        {
          name: "Короткие волосы",
          price: 71,
        },
        {
          name: "Средние волосы",
          price: 80,
        },
        {
          name: "Длинные волосы",
          price: 96,
        },
      ],
    },

    {
      id: "hair-head-massage",
      name: "Массаж головы",
      price: 21,
    },

    {
      id: "hair-glossing",
      name: "Глазирование волос",
      options: [
        {
          name: "Короткие волосы",
          price: 152,
        },
        {
          name: "Средние волосы",
          price: 170,
        },
        {
          name: "Длинные волосы",
          price: 192,
        },
      ],
    },

    {
      id: "hair-scalp-peeling",
      name: "Пилинг кожи головы",
      price: 71,
    },

    {
      id: "hair-total-blond",
      name: "Тотал блонд с чисткой полотна и выравниванием цвета",
      options: [
        {
          name: "Короткие волосы",
          price: 294,
          vipPrice: 305,
        },
        {
          name: "Средние волосы",
          price: 332,
          vipPrice: 348,
        },
        {
          name: "Длинные волосы",
          price: 350,
          vipPrice: 368,
        },
      ],
    },

    {
      id: "hair-total-blond-roots",
      name: "Окрашивание корней (тотал блонд)",
      options: [
        {
          name: "Топ мастер",
          price: 170,
        },
        {
          name: "VIP мастер",
          price: 170,
        },
      ],
    },

    {
      id: "hair-total-blond-toning",
      name: "Комплекс: тонирование + окрашивание корней (тотал блонд)",
      options: [
        {
          name: "Короткие волосы",
          price: 276,
          vipPrice: 287,
        },
        {
          name: "Средние волосы",
          price: 294,
          vipPrice: 305,
        },
        {
          name: "Длинные волосы",
          price: 330,
          vipPrice: 350,
        },
      ],
    },
  ],
};