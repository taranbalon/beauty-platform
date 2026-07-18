export type PriceOption = {
  name: string;
  price: number;
  vipPrice?: number;
};

export type PriceItem = {
  id: string;
  name: string;
  price?: number;
  options?: PriceOption[];
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};