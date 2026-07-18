import { browsPrices } from "./brows";
import { cosmetologyPrices } from "./cosmetology";
import { depilationPrices } from "./depilation";
import { hairPrices } from "./hair";
import { lashesPrices } from "./lashes";
import { makeupPrices } from "./makeup";
import { manicurePrices } from "./manicure";
import { massagePrices } from "./massage";
import { pedicurePrices } from "./pedicure";
import { pmuPrices } from "./pmu";

export const priceCategories = [
  hairPrices,
  manicurePrices,
  pedicurePrices,
  browsPrices,
  lashesPrices,
  makeupPrices,
  pmuPrices,
  cosmetologyPrices,
  massagePrices,
  depilationPrices,
];

export const getPriceCategory = (id: string) =>
  priceCategories.find((category) => category.id === id);