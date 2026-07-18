import { PriceCategory } from "./types";

export const pmuPrices: PriceCategory = {
  id: "pmu",
  title: "Перманентный макияж",

  items: [
    {
      id: "pmu-eyebrows",
      name: "Перманентный макияж бровей (первая процедура)",
      price: 300,
    },

    {
      id: "pmu-correction",
      name: "Коррекция перманентного макияжа любой зоны",
      price: 120,
    },

    {
      id: "pmu-refresh",
      name: "Обновление перманентного макияжа",
      price: 210,
    },

    {
      id: "pmu-lips",
      name: "Перманентный макияж губ",
      price: 330,
    },

    {
      id: "pmu-lashline",
      name: "Перманентный макияж межресничного пространства",
      price: 251,
    },

    {
      id: "pmu-winged-arrow",
      name: "Перманентный макияж: стрелка с растушевкой",
      price: 420,
    },
  ],
};