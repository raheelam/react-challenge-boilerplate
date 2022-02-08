import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { getPaymentDetail } from "../../api/payment";
import DetailCard, {
  Detail,
  DetailCardContainer,
} from "./components/DetailCard";
import Timeline from "./components/Timeline";
import {
  AmountWithLogo,
  getPaymentMethodLogo,
  getProcessorLogo,
  StatusBox,
  getLogo,
} from "../../shared/utils/transactionHelpers";
import { RefundButton } from "./components/RefundButton";
import { lowerAllAndCapitalizeFirstLetter } from "../../shared/utils/stringHelpers";

const Container = styled.div`
  width: 90vw;
  padding: 1rem;
  min-height: 100vh;
  display: flex;
  background: #f5f5f5;
  flex-direction: column;
  margin: auto;
  align-items: center;

  & > button {
    align-self: start;
    color: #646ede;
    border: none;
    margin-left: -1rem;
    background: none;
  }

  .amount-detail {
    width: 101%;
    display: flex;
    margin-top: 3rem;
    margin-bottom: -0.4rem;
    gap: 1rem;
    align-self: start;
    align-items: end;
  }

  @media (min-width: 1400px) {
    width: 1200px;
    & > button,
    .amount-detail {
      margin-left: 1rem;
    }
  }
`;

const BigAmount = styled.p`
  margin-bottom: -8px;
  @media (max-width: 900px) {
    margin-bottom: 0px;
  }
`;
export const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
  justify-content: center;
  width: 100%;
`;
export const CardInfo = ({ cardInfo }) => {
  const { cardholderName, expirationMonth, expirationYear, last4Digits } =
    cardInfo;
  return (
    <>
      <Detail title="Cardholder Name" value={cardholderName} />
      <Detail
        title="Card Number"
        value={`${".".repeat(4)}  ${".".repeat(4)} ${".".repeat(
          4
        )} ${last4Digits}`}
      />
      <Detail
        title="Expiration"
        value={`${expirationMonth}/${expirationYear}`}
      />
    </>
  );
};
const TransactionInfoContainer = styled.div`
  width: 97%; //101 for small
  margin-left: -1rem;
  justify-content: space-between;
  display: grid;
  align-self: start;
  grid-template-columns: 48% 48%;

  @media (max-width: 1024px) {
    width: 99%;
    margin-left: -1.5rem;
    grid-template-columns: 100%;
  }
  @media (max-width: 680px) {
    width: 101%;
  }
`;
export const TransactionInfo = ({ paymentDetail }) => {
  const transactionId = paymentDetail?.transactions[0]?.processorTransactionId;
  const cardInfo = paymentDetail?.paymentInstrument?.paymentInstrumentData;
  const network =
    paymentDetail?.paymentInstrument?.paymentInstrumentData?.binData?.network;
  const type =
    paymentDetail?.paymentInstrument?.paymentInstrumentType.split("_")[1];

  return (
    <TransactionInfoContainer>
      <DetailCardContainer
        style={{ marginBottom: "0 " }}
        grid="auto"
        align="top"
      >
        <Detail
          logo={getProcessorLogo(paymentDetail.processor)}
          value={lowerAllAndCapitalizeFirstLetter(paymentDetail.processor)}
        />

        <Detail title="Account ID" value={paymentDetail.processorMerchantId} />
        {transactionId && (
          <Detail title="Transaction ID" value={transactionId} />
        )}
      </DetailCardContainer>
      <DetailCardContainer
        style={{ marginBottom: "0 " }}
        grid="auto"
        align="top"
      >
        <Detail logo={getPaymentMethodLogo(network)} value="Payment Method">
          {!cardInfo.cardholderName && (
            <p style={{ marginTop: "0.5rem" }}>{type}</p>
          )}
        </Detail>

        {cardInfo.cardholderName && (
          <>
            <CardInfo cardInfo={cardInfo} />
          </>
        )}
      </DetailCardContainer>
      <DetailCardContainer
        style={{ marginBottom: "0 " }}
        grid="auto"
        align="top"
      >
        <Detail
          logo={getProcessorLogo(paymentDetail.processor)}
          value="Risk Data"
        ></Detail>
      </DetailCardContainer>
      <DetailCardContainer
        style={{ marginBottom: "0 " }}
        grid="auto"
        align="top"
      >
        <Detail logo={getLogo("3DS")} value=" 3DS" />
        <Detail
          title="Response"
          value={
            <StatusBox
              color="#505050"
              status={
                paymentDetail.threeDSecureAuthentication?.responseCode ||
                "Not Performed"
              }
            />
          }
        />
      </DetailCardContainer>
    </TransactionInfoContainer>
    // </div>
  );
};

function PaymentDetail(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [paymentDetail, setPaymentDetail] = useState(null);

  useEffect(() => {
    getPaymentDetail(id).then((data) => {
      setPaymentDetail(data);
    });
  }, [id]);

  const getMessage = () => {
    if (paymentDetail == null) {
      return "loading...";
    }
    if (!paymentDetail.id) {
      return "No record found";
    }
  };
  return (
    <Container>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowLeftOutlined width="50px" /> transactions
      </button>
      {paymentDetail?.id ? (
        <>
          <div className="amount-detail">
            <Detail>
              <BigAmount>
                <AmountWithLogo
                  currency={paymentDetail.currencyCode}
                  amount={paymentDetail.amount.toFixed(2)}
                  size={"2.5rem"}
                />
              </BigAmount>
            </Detail>
            <Detail title="Refund">
              <AmountWithLogo
                currency={paymentDetail.currencyCode}
                amount={paymentDetail.amountRefunded.toFixed(2)}
              />
            </Detail>
            <Detail
              title="Final"
              value={
                <AmountWithLogo
                  currency={paymentDetail.currencyCode}
                  amount={paymentDetail.amountAuthorized.toFixed(2)}
                />
              }
            />
            {paymentDetail.amountRefunded > 0 && <RefundButton />}
          </div>
          <DetailCard paymentDetail={paymentDetail} />
          <Timeline />
          <TransactionInfo paymentDetail={paymentDetail} />
        </>
      ) : (
        <CenteredDiv>{getMessage()}</CenteredDiv>
      )}
    </Container>
  );
}

export default PaymentDetail;
