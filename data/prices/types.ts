export type PriceItem = {
  title: string;
  price: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};