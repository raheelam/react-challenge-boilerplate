import styled from "styled-components";

import USD from "../../../assets/USD.svg";
import EUR from "../../../assets/EUR.svg";
import GBP from "../../../assets/GBP.svg";

const StyledAmount = styled.span`
  & > img {
    width: ${(props) => props.size || "20px"};
    height: ${(props) => props.size || "20px"};
  }
  display: flex;
  align-items: center;
  font-size: ${(props) => props.size || "20px"};
  gap: 1px;

  @media (max-width: 900px) {
    align-items: center;
    gap: 0.1rem;
    font-size: 1rem;
    & > img {
      width: 0.6rem;
      height: 0.8rem;
    }
  }
`;

const currenciesLogos = {
  EUR: EUR,
  USD: USD,
  GBP: GBP,
};
export const AmountWithLogo = ({ currency, amount, size, color }) => {
  if (currenciesLogos[currency.toUpperCase()])
    return (
      <StyledAmount size={size} color={color}>
        <img alt={currency} src={currenciesLogos[currency.toUpperCase()]} />
        <span>{amount}</span>
      </StyledAmount>
    );
};
