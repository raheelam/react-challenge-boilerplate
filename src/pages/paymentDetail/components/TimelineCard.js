import React from "react";

import styled from "styled-components";
import { BellOutlined } from "@ant-design/icons";

import { CurvedArrow } from "../../../shared/components/Arrow";
import { truncateText } from "../../../shared/utils/stringHelpers";
import { RefundButton } from "./RefundButton";
import { StatusBox } from "../../../shared/utils/transactionHelpers";

const TimelineCardWrapper = styled.div`
  margin: 1rem;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  box-shadow: 0 1px 5px 0 rgb(0 0 0/0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e5e5e5;
  border-left: 3px solid #e5e5e5;
  border-radius: 5px;
  z-index: 999;
  background: white;

  .chain {
    font-size: 0.7em;
  }

  .chain.purple {
    color: #646ede;
  }

  & > p {
    border: 1px solid red;
  }

  @media (max-width: 768px) {
    .chain {
      width: 35%;
      font-size: 0.6rem;
    }
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
  }
`;

const LeftInfo = styled.div`
 .date{
 font-size: 0.7em;
}
.amount-container{
    margin-top: 0.6rem ;
    display: flex;
    align-items: center;

    &> * {
        margin-right: 0.5rem;
    }

    .amount{
        font-size: 1.3rem;
        font-weight: 500;
    }

    .submitted{
        font-size: 0.8rem;
        font-weight: 500;
    }
}
.type-container{
    display: flex;
    align-items: center;

    .type{
        font-size: 1.3rem;
        font-weight: 500;
        color:black;
    }
   
    &> * {
        margin-right: 0.5rem;
    }

    &> span{
        font-size: 0.8em;
    }  
}

& > span{
    font-size: 0.7em;
   
}
  }

  @media (max-width: 768px){
      .type-container{
          .type{
              font-size: 1rem;
          }
          display: grid;
          &> span{
            font-size: 0.65em;
        }
      }

      .date{
        font-size: 0.7rem; 
       
      }

      .amount-container{
        margin-top: 0.5rem ;

        .amount{
            font-size: 1rem; 
        }

        .submitted{
            font-size: 0.7rem;
           
        }
    }
      
  }
`;
const IconContainer = styled.div`
  display: flex;
  align-items: start;
  padding: 0 1rem;
  color: #cccccc;
  justify-content: space-between;
  height: 65px;
`;
const DoubleNotificationContainer = styled.div`
  display: grid;
  alignitems: start;
  position: relative;
  width: 100%;
  height: auto;
`;

const LeftContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 25fr;
  align-items: end;
  width: 100%;
  max-width: 100%;
`;

const TimelineSingleCardContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
`;

export const NotificationCard = (props) => {
  //const {  link,chain, attempts,  date } = props;
  const { status } = props;
  return (
    <TimelineCardWrapper>
      <LeftInfo>
        <div className="type-container">
          <p className="type">Notification</p>
          <span>{truncateText(25, "http://primer.io/hook/hgfhghuh...")}</span>
          {status === "failed" && (
            <span style={{ color: "red" }}>5 failed attempts</span>
          )}
        </div>
        <span className="date">8 Dec 2020, 15:34</span>
      </LeftInfo>
      <div className="chain ">My comapny .inc &rarr; Primer &rarr; stripe </div>
    </TimelineCardWrapper>
  );
};

export const AuthorizationCard = (props) => {
  //const {  status,amount,  chain, date } = props;
  return (
    <TimelineCardWrapper width="100%">
      <LeftInfo>
        <div className="type-container">
          <p className="type">Authorization</p>
          <StatusBox status="settled" />
        </div>
        <div className="amount-container">
          <span className="amount">$3.94</span>
          <span className="submitted">Submitted for settlement</span>
        </div>
        <span className="date">8 Dec 2020, 15:34</span>
      </LeftInfo>
      <div className="chain purple">
        My comapny .inc &rarr; Primer &rarr; stripe{" "}
      </div>
    </TimelineCardWrapper>
  );
};

export const RefundCard = (props) => {
  //const {  amount,  date, chain } = props;
  return (
    <TimelineCardWrapper>
      <LeftInfo>
        <div className="type-container">
          <p className="type">Refund</p>
          <RefundButton />
        </div>
        <div className="amount-container">
          <span className="amount">$3.94</span>
        </div>
        <span className="date">8 Dec 2020, 15:34</span>
      </LeftInfo>
      <div className="chain purple">
        My comapny .inc &rarr; Primer &rarr; stripe{" "}
      </div>
    </TimelineCardWrapper>
  );
};

export const TimelineSingleCard = ({ children }) => {
  return <TimelineSingleCardContainer>{children}</TimelineSingleCardContainer>;
};

const TimelineDoubleCard = ({ type }) => {
  return (
    <DoubleNotificationContainer>
      <LeftContainer>
        <CurvedArrow />
        <IconContainer>
          <BellOutlined />
        </IconContainer>
        <div>
          <NotificationCard status="failed" />
        </div>
      </LeftContainer>
      {type === "refund" ? <RefundCard /> : <AuthorizationCard />}
    </DoubleNotificationContainer>
  );
};

export default TimelineDoubleCard;
