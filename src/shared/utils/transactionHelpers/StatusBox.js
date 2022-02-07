import styled from "styled-components";
import { capitalizeFirstLetter } from "../stringHelpers";

const StyledStatus = styled.span`
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  display: flex;
  align-items: center;
  justify-content: center;

  & > span {
    background-color: rgba(255, 255, 255, 0.95);
    color: ${(props) => props.color};
    display: flex;

    border: none;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
    padding: 8px 10px;
    font-size: 0.7rem;
    font-weight: 500;
  }
  @media (max-width: 680px) {
    height: auto;
    & > span {
      padding: 4px 6px;
    }
  }
`;

const statusColors = {
  PENDING: "orange",
  FAILED: "red",
  AUTHORIZED: "green",
  SETTLED: "green",
  SETTLING: "#505050",
  DECLINED: "red",
  CANCELLED: "red",
};
const StatusBox = ({ status, height, width, color }) => {
  return (
    <StyledStatus
      color={color ? color : statusColors[status?.toUpperCase()]}
      height={height}
      width={width}
    >
      <span>{capitalizeFirstLetter(status?.toLowerCase())}</span>
    </StyledStatus>
  );
};

export default StatusBox;
