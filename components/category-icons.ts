import {
  Scissors,
  Sparkle,
  Footprints,
  Eye,
  FlowerLotus,
  PaintBrush,
  PenNib,
  Heart,
  Drop,
  Feather,
} from "@phosphor-icons/react/dist/ssr";

export function getCategoryIcon(id: string) {
  switch (id) {
    case "hair":
      return Scissors;
    case "manicure":
      return Sparkle;
    case "pedicure":
      return Footprints;
    case "lashes":
      return Eye;
    case "brows":
      return FlowerLotus;
    case "makeup":
      return PaintBrush;
    case "pmu":
      return PenNib;
    case "massage":
      return Heart;
    case "cosmetology":
      return Drop;
    case "depilation":
      return Feather;
    default:
      return Sparkle;
  }
}
