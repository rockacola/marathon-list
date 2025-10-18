import { Price } from "@/types/Event";
import { DEFAULT_LOCALE } from "@/constants/locale";

const currencySymbols: Record<string, string> = {
  AUD: "AU$",
  USD: "US$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
  CNY: "¥",
  KRW: "₩",
  SGD: "S$",
  NZD: "NZ$",
  CAD: "CA$",
};

export const formatPrice = (price: Price): string => {
  const symbol = currencySymbols[price.currency] || price.currency;
  const formattedAmount = price.amount.toLocaleString(DEFAULT_LOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${symbol}${formattedAmount}`;
};
