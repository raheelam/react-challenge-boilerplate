import mastercard from "../../../assets/mastercard.svg";
import visa from "../../../assets/visa.svg";
import amex from "../../../assets/amex.svg";
import jcb from "../../../assets/jcb.svg";
import paymentCard from "../../../assets/payment-card.svg";

const paymentMethodsLogos = {
  MASTERCARD: mastercard,
  VISA: visa,
  AMEX: amex,
  JCB: jcb,
};
export const getPaymentMethodLogo = (paymentMethod) => {
  if (paymentMethodsLogos[paymentMethod?.toUpperCase()])
    return (
      <img
        alt={paymentMethod}
        width="20px"
        src={paymentMethodsLogos[paymentMethod?.toUpperCase()]}
      />
    );
  if (paymentMethod) {
    return <img alt={paymentMethod} width="20px" src={paymentCard} />;
  }
};

export const getPaymentMethod = (payment) => {
  return payment?.paymentInstrument?.paymentInstrumentData?.binData?.network;
};
