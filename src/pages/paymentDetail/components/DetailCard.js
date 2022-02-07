import React from "react";
import moment from "moment";
import styled from "styled-components";

import {
  getPaymentMethodLogo,
  getProcessorLogo,
  StatusBox,
} from "../../../shared/utils/transactionHelpers";
import { lowerAllAndCapitalizeFirstLetter } from "../../../shared/utils/stringHelpers";

export const DetailCardContainer = styled.div`
  width: 92%;
  border-radius: 8px;
  margin: 1.5rem;
  padding: 1rem 2rem;
  background-color: white;
  min-height: 10%;
  gap: 1rem;
  justify-content: space-between;
  display: grid;
  align-items: ${(props) => props.align || "center"};
  grid-template-columns: ${(props) => props.grid || "repeat(6, auto)"};
  box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1);
  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    margin: 1rem;
    grid-template-columns: auto;
    gap: 0.8rem;
  }
`;
export const DetailContainer = styled.div`
  .title {
    font-size: 0.9rem;
    color: #505050;
    margin-bottom: 0.3rem;
  }
  .value {
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 0.7rem;
      margin-bottom: 0.2rem;
    }
    .value {
      font-size: 0.8rem;
      gap: 0.2rem;
    }
  }
`;

export const Detail = ({ title, value, logo, children }) => {
  return (
    <DetailContainer>
      {title && <p className="title">{title}</p>}
      <p className="value">
        {logo}
        {value}
      </p>
      <div>{children}</div>
    </DetailContainer>
  );
};
function DetailCard({ paymentDetail }) {
  const { currencyCode, orderId, date, status, processor } = paymentDetail;
  const network =
    paymentDetail?.paymentInstrument?.paymentInstrumentData?.binData?.network;
  const type =
    paymentDetail.paymentInstrument.paymentInstrumentType.split("_")[1];
  return (
    <>
      <DetailCardContainer>
        <Detail title="Currency" value={currencyCode} />
        <Detail
          title="Processor"
          logo={getProcessorLogo(processor)}
          value={lowerAllAndCapitalizeFirstLetter(processor)}
        />
        <Detail
          title="Payment Method"
          logo={getPaymentMethodLogo(network)}
          value={
            lowerAllAndCapitalizeFirstLetter(type) +
            (network ? "/" + lowerAllAndCapitalizeFirstLetter(network) : "")
          }
        />
        <Detail title="Your Reference" value={orderId} />
        <Detail
          title="Submitted"
          value={moment(date).format("MMM D YYYY, HH:MM")}
        />
        <StatusBox width="6.25rem" height="4rem" status={status} />
      </DetailCardContainer>
    </>
  );
}

export default DetailCard;
