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

      @media (max-width: 780px) { 
        tr{
        grid-template-columns: 20% 10% 10% 15% 28% 20% 8% ;}
        td{
          padding: 0.5rem 1.3rem;
          img {
            margin-right: 0.3rem;
          } 
        } 
    }
    @media (min-width: 1400px) {
        font-size: 0.9rem;
       width: 1200px
      }
}`;

const TableContainer = styled.div`
  padding: 0.5rem 0;
  height: auto;
  background: white;
  width: 95%;
  overflow: scroll;
  box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1);
`;

export default function TransactionsTable({ transactions }) {
  if (transactions?.length === 0 || !transactions) {
    return <div>No transactions found.</div>;
  }
  return (
    <Table>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td
              style={{ textAlign: "right" }}
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              <strong>{transaction.amount}</strong> {transaction.currencyCode}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <StatusBox status={transaction.status} />
            </td>
            <td
              style={{ textAlign: "right" }}
              className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
            >
              {transaction.amountRefunded > 0 ? "Refunded" : ""}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {getProcessorLogo(transaction.processor)}
              {getPaymentMethodLogo(getPaymentMethod(transaction))}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {transaction.orderId}
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {moment(transaction.date).format("MMM D YYYY, HH:MM")}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <Link
                to={`/payments/${transaction.id}`}
                className="text-indigo-600 hover:text-indigo-900"
              >
                <RightOutlined />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
