import { PriceCategory } from "./types";

import { hairPrices } from "./hair";
import { lashesPrices } from "./lashes";
import { browsPrices } from "./brows";
import { manicurePrices } from "./manicure";
import { pedicurePrices } from "./pedicure";
import { pmuPrices } from "./pmu";
import { depilationPrices } from "./depilation";
import { cosmetologyPrices } from "./cosmetology";
import { makeupPrices } from "./makeup";
import { massagePrices } from "./massage";

export const priceCategories: PriceCategory[] = [
  hairPrices,
  lashesPrices,
  browsPrices,
  manicurePrices,
  pedicurePrices,
  pmuPrices,
  depilationPrices,
  cosmetologyPrices,
  makeupPrices,
  massagePrices,
];