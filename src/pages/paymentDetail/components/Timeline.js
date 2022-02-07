import React from "react";
import styled from "styled-components";

import { StraightArrowRight } from "../../../shared/components/Arrow";
import TimelineDoubleCard, {
  NotificationCard,
  TimelineSingleCard,
} from "./TimelineCard";

const timeline = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const StyledLine = styled.span`
  position: absolute;
  top: 60%;
  left: 1rem;
  margin-left: -1px;
  height: 100%;
  width: 0.125rem;
  background: orange;
`;

const TimelineWrapper = styled.div`
  display: flow-root;
  border-radius: 8px;
  width: 95%;
  box-shadow: 0 1px 3px 0 rgb(0 0 0/0.1);
  //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  overflow-y: hidden;
  background-color: white;
  ul {
    margin-bottom: -2rem;
    list-style-type: none;
    padding: 0;
  }
  li > div {
    position: relative;
    padding-bottom: 1rem;

    & > span {
      position: absolute;
      top: 1rem;
      left: 1rem;
      margin-left: -1px;
      height: 100%;
      width: 0.125rem;
      background: #f5f5f5;
    }

    & > div {
      position: relative;
      display: flex;
      & > * {
        margin-right: 0.75rem;
      }
    }
  }
`;

const Icon = styled.span`
  height: 1.5rem;
  width: 1.5rem;
  margin-top: 430%;
  border-radius: 6px;
  margin-left: -1px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d5d5d5;
  color: white;
  border-bottom: 5px solid white;
  border-top: 5px solid white;
  border: 5px solid white;
`;

const ContentContainer = styled.span`
  display: grid;
  width: 100%;
  padding-top: 0.375rem;
  min-width: 0;
p,a{
    font-size: 0.5rem
    color: brown
}

`;
export default function Timeline() {
  return (
    <TimelineWrapper>
      <ul>
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div>
              {eventIdx !== timeline.length ? (
                <span aria-hidden="true" />
              ) : null}
              <div>
                {event.id !== 1 ? (
                  <div>
                    <Icon>M</Icon>
                  </div>
                ) : (
                  <div>
                    <span style={{ marginTop: "500%" }}></span>
                  </div>
                )}
                <ContentContainer>
                  {event.id == 1 ? (
                    <TimelineSingleCard>
                      <StraightArrowRight width="75%" />
                      <NotificationCard status="success" />
                    </TimelineSingleCard>
                  ) : event.id == 3 ? (
                    <TimelineDoubleCard />
                  ) : (
                    <TimelineDoubleCard type="refund" />
                  )}
                </ContentContainer>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </TimelineWrapper>
  );
}
