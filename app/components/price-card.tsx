import { PriceItem } from "@/data/prices/types";
import BookingButton from "@/app/components/booking-button";

type PriceCardProps = {
  item: PriceItem;
};

export default function PriceCard({ item }: PriceCardProps) {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-beauty-card">
      <h2 className="text-xl font-bold text-gray-900">
        {item.name}
      </h2>

      {item.price && (
        <p className="mt-3 text-2xl font-bold text-gray-900">
          {item.price} BYN
        </p>
      )}

      {item.options?.map((option) => (
        <div
          key={option.name}
          className="mt-5 border-t border-gray-100 pt-5"
        >
          <div className="text-lg font-medium">
            {option.name}
          </div>

          <div className="mt-2 text-xl font-bold">
            {option.price} BYN
          </div>

          {option.vipPrice && (
            <div className="mt-1 text-sm text-gray-500">
              VIP {option.vipPrice} BYN
            </div>
          )}
        </div>
      ))}

      <BookingButton />
    </div>
  );
}