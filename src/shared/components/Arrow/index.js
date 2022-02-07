import React from "react";
import styled, { css } from "styled-components";

export const ArrowHead = styled.i`
  border: solid #cccccc;
  border-width: 0 1px 1px 0;
  display: inline-block;
  padding: 3px;
  ${(props) =>
    props.right &&
    css`
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    `}
  ${(props) =>
    props.left &&
    css`
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    `}
${(props) =>
    props.up &&
    css`
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    `}

${(props) =>
    props.down &&
    css`
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    `}
`;

export const ArrowContainer = styled.div`
  display: flex;
  position: relative;
  align-items: ${(props) => (props.height ? "center" : "start")};
  justify-content: ${(props) => (props.height ? "center" : "start")};

  width: 0;
  padding: ${(props) => (props.height ? "2px 5px" : "3px 0")};

  height: ${(props) => props.height || "auto"};

  transform: ${(props) => `rotate(${props.rotate}deg)`};
  -webkit-transform: ${(props) => `rotate(${props.rotate}deg)`};
`;
export const ArrowLine = styled.div`
  display: inline-block;
  margin-left: 5px;
  margin-right: -7px;
  border-bottom: 1px solid #ccc;
  width: ${(props) => props.width};
`;

export const ArrowLineContainer = styled.div`
  height: ${(props) => (props.height ? "1px" : "4px")};
  display: flex;

  margin-left: -7px;
`;

export const CurvedArrowContainer = styled.div`  
    margin-left: 1.5rem;
    display: flex;
    align-items: start;
  }}`;
export const CurvedLine = styled.div`
  margin-top: 3.3px;
  margin-right: -7px;
  width: 60px;
  height: 55px;
  border-top: 1px solid #cccccc;
  border-left: 1px solid #cccccc;
  border-top-left-radius: 5px;
`;
export const CurvedArrow = () => {
  return (
    <CurvedArrowContainer>
      <CurvedLine />
      <ArrowHead right />
    </CurvedArrowContainer>
  );
};

export const StraightArrowRight = ({ width }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "80%",
        alignItems: "center",
      }}
    >
      <ArrowLine width={width} />
      <ArrowHead right />
    </div>
  );
};

// const FullArrow = ({ direction = "up", width = "300px" }) => {
//   const arrowDirections = { right: "180", left: "0", up: "-270", down: "270" };
//   if (!arrowDirections[direction]) {
//     return null;
//   }
//   const rotate = arrowDirections[direction];
//   const directionsWidth = {
//     left: { width },
//     right: { width },
//     up: { width, height: width },
//     down: { width, height: width },
//   };

//   return (
//     <ArrowContainer rotate={rotate} {...directionsWidth[direction]}>
//       <ArrowHead left />
//       <ArrowLineContainer {...directionsWidth[direction]}>
//         <ArrowLine width={width} />
//       </ArrowLineContainer>
//     </ArrowContainer>
//   );
// };

// export default FullArrow;
