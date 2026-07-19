export type Category = {
  id: string;
  title: string;
  icon: string;
};

export const categories: Category[] = [
  {
    id: "hair",
    title: "Парикмахерские услуги",
    icon: "💇",
  },
  {
    id: "manicure",
    title: "Маникюр",
    icon: "💅",
  },
  {
    id: "pedicure",
    title: "Педикюр",
    icon: "🦶",
  },
  {
    id: "lashes",
    title: "Ресницы",
    icon: "👁️",
  },
  {
    id: "brows",
    title: "Брови",
    icon: "✨",
  },
  {
    id: "makeup",
    title: "Макияж",
    icon: "💄",
  },
  {
    id: "pmu",
    title: "Перманентный макияж",
    icon: "✒️",
  },
  {
    id: "massage",
    title: "Массаж",
    icon: "💆",
  },
  {
    id: "cosmetology",
    title: "Косметология",
    icon: "🧴",
  },
  {
    id: "depilation",
    title: "Депиляция",
    icon: "🪒",
  },
];
