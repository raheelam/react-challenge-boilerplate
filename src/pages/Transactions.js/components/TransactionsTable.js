import styled from "styled-components";
import moment from "moment";
import { Link } from "react-router-dom";

import { RightOutlined } from "@ant-design/icons";

import {
  getPaymentMethod,
  getPaymentMethodLogo,
  getProcessorLogo,
  StatusBox,
} from "../../../shared/utils/transactionHelpers";

const Table = styled.table`
font-size: 0.8rem;
border-radius: 8px;
box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1);
display: grid;
width: 95%;
    overflow: scroll;
    background: white;
    tr {
        width: 100%;
        display: grid;
        align-items: center;
        grid-template-columns: 20% 8% 10% 12% 26% 18% 6% ;
        border-bottom: 2px solid #f5f5f5;
      }
    td {
        padding: 1rem 1rem;
        img {
            margin-right: 0.5rem;
          }
      }


      @media (max-width: 1024px) { 
        tr{
          
        grid-template-columns:20% 12% 10% 12% 26% 14% 6%  ;}
        
        } 
    }
      @media (max-width: 780px) { 
        tr{
          td:last-child{
              padding-left: 0
          }
        grid-template-columns:20% 14% 10% 15% 32% 16% 8% ;}
        td{
         padding: 0.5rem 1.4rem ;
          img {
            margin-right: 0.2rem;
          } 
        } 
    }
    
    @media (min-width: 1400px) {
        font-size: 0.9rem;
       width: 1200px
      }
}`;

export default function TransactionsTable({ transactions }) {
  if (transactions?.length === 0 || !transactions) {
    return <div>No transactions found.</div>;
  }
  return (
    <Table>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td style={{ textAlign: "right" }}>
              <strong>{transaction.amount}</strong> {transaction.currencyCode}
            </td>
            <td>
              <StatusBox status={transaction.status} />
            </td>
            <td style={{ textAlign: "right" }}>
              {transaction.amountRefunded > 0 ? "Refunded" : ""}
            </td>
            <td>
              {getProcessorLogo(transaction.processor)}
              {getPaymentMethodLogo(getPaymentMethod(transaction))}
            </td>
            <td>{transaction.orderId}</td>

            <td>{moment(transaction.date).format("MMM D YYYY, HH:MM")}</td>
            <td>
              <Link to={`/payments/${transaction.id}`}>
                <RightOutlined />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
