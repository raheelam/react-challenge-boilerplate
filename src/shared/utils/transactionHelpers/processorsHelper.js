import paypal from "../../../assets/paypal.svg";
import stripe from "../../../assets/stripe.svg";
import braintree from "../../../assets/braintree.svg";
import adyen from "../../../assets/adyen.svg";

const processorsLogos = {
  PAYPAL: paypal,
  STRIPE: stripe,
  BRAINTREE: braintree,
  ADYEN: adyen,
};
export const getProcessorLogo = (processor) => {
  if (processorsLogos[processor?.toUpperCase()])
    return (
      <img
        alt={processor}
        width="20px"
        src={processorsLogos[processor.toUpperCase()]}
      />
    );
};
