export type Service = {
  id: string;
  icon: string;
  name: string;
};

export const services: Service[] = [
  { id: "lash-extensions", icon: "👁", name: "Наращивание ресниц" },
  {
    id: "universal-hairdresser",
    icon: "✂️",
    name: "Парикмахер-универсал",
  },
  {
    id: "hair-stylist",
    icon: "💇",
    name: "Парикмахер-стилист",
  },
  { id: "manicure", icon: "💅", name: "Маникюр" },
  { id: "pedicure", icon: "🦶", name: "Педикюр" },
  { id: "nail-correction", icon: "✨", name: "Коррекция ногтей" },
  { id: "lash-maker", icon: "🌿", name: "Ламимейкер" },
  { id: "brow-artist", icon: "🤎", name: "Бровист" },
  {
    id: "permanent-makeup",
    icon: "🎨",
    name: "Мастер перманентного макияжа",
  },
  { id: "depilation", icon: "🪒", name: "Депиляция" },
  { id: "massage", icon: "💆", name: "Массаж" },
];
