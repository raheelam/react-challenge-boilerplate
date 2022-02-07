export const paymentMethods = [
  { label: "All", value: "ALL" },
  { label: "Card", value: "PAYMENT_CARD" },
  { label: "Paypal order", value: "PAYPAL_ORDER" },
  { label: "Apple pay", value: "APPLE_PAY" },
];
export const processors = [
  { label: "All", value: "ALL" },
  { label: "Stripe", value: "STRIPE" },
  { label: "Braintree", value: "BRAINTREE" },
  { label: "Paypal", value: "PAYPAL" },
  { label: "Adyen", value: "ADYEN" },
];
export const status = [
  { label: "All", value: "ALL" },
  { label: "Pending", value: "PENDING" },
  { label: "Failed", value: "FAILED" },
  { label: "Authorized", value: "AUTHORIZED" },
  { label: "Settled", value: "SETTLED" },
  { label: "Settling", value: "SETTLING" },
  { label: "Declined", value: "DECLINED" },
  { label: "Cancelled", value: "CANCELLED" },
];
export const currencyCodes = [
  { label: "All", value: "ALL" },
  { label: "USD", value: "USD" },
  { label: "GBP", value: "GBP" },
  { label: "EUR", value: "EUR" },
];

export const initialFilterValues = {
  processor: "ALL",
  paymentMethod: "ALL",
  currentStatus: "ALL",
  currencyCode: "ALL",
  referenceId: "",
};
