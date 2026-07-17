export type Service = {
  id: string;
  icon: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "lash-extensions",
    icon: "👁",
    name: "Наращивание ресниц",
    description: "",
  },
  {
    id: "universal-hairdresser",
    icon: "✂️",
    name: "Парикмахер",
    description: "",
  },
  {
    id: "hair-stylist",
    icon: "💇",
    name: "Парикмахер-стилист",
    description: "",
  },
  {
    id: "manicure",
    icon: "💅",
    name: "Маникюр",
    description: "Маникюр / Наращивание",
  },
  {
    id: "pedicure",
    icon: "🦶",
    name: "Педикюр",
    description: "",
  },
  {
    id: "nail-correction",
    icon: "✨",
    name: "Коррекция ногтей",
    description: "Укрепление / Ремонт",
  },
  {
    id: "lash-maker",
    icon: "🌿",
    name: "Ламимейкер",
    description: "",
  },
  {
    id: "brow-artist",
    icon: "🤎",
    name: "Бровист",
    description: "",
  },
  {
    id: "permanent-makeup",
    icon: "🎨",
    name: "Мастер перманентного макияжа",
    description: "",
  },
  {
    id: "depilation",
    icon: "🪒",
    name: "Депиляция",
    description: "",
  },
  {
    id: "massage",
    icon: "💆",
    name: "Массаж",
    description: "",
  },
];