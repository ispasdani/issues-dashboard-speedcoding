import React from "react";
import styled from "styled-components";
import Status from "../atoms/status";
import Button from "@/components/atoms/button";
import { ISSUE_CARD_BUTTONS } from "@/utils/constants";
import { mediaQueries } from "@/utils/mediaQueries";

interface IssueCardProps {
  title: string;
  status:
    | "Active"
    | "Resolved"
    | "Closed"
    | "Awaiting Additional Info"
    | "Pending";
  assignedAgent: {
    firstName: string;
    lastName: string;
    profilePictureUrl: string;
  };
  supplier: { name: string; logoUrl: string };
  onTitleClick: () => void;
  onSetStatus: (
    newStatus: "Closed" | "Awaiting Additional Info" | "Resolved" | "Pending"
  ) => void;
}

const IssueCard = ({
  title,
  status,
  assignedAgent,
  supplier,
  onTitleClick,
  onSetStatus,
}: IssueCardProps) => {
  return (
    <CardContainer>
      <InfoContainer>
        <Avatar
          src={assignedAgent.profilePictureUrl}
          alt={`${assignedAgent.firstName} ${assignedAgent.lastName}`}
        />
        <div>
          <Title onClick={onTitleClick}>{title}</Title>
          <AgentName>{`${assignedAgent.firstName} ${assignedAgent.lastName}`}</AgentName>
          <SupplierInfo>
            <img
              src={supplier.logoUrl}
              alt={supplier.name}
              width={32}
              height={16}
            />
            <span>{supplier.name}</span>
          </SupplierInfo>
        </div>
      </InfoContainer>
      <Status status={status} />
      <ActionsContainer>
        {ISSUE_CARD_BUTTONS.map((buttonConfig) => (
          <Button
            key={buttonConfig.actionStatus}
            onClick={() => onSetStatus(buttonConfig.actionStatus)}
            status={status}
            buttonText={buttonConfig.text}
          >
            {buttonConfig.text}
          </Button>
        ))}
      </ActionsContainer>
    </CardContainer>
  );
};

export default IssueCard;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 5px 0px;
  border-radius: 6px;

  ${mediaQueries.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const Title = styled.h4`
  margin: 0;
  cursor: pointer;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

const AgentName = styled.p`
  margin: 0;
  font-size: 0.85rem;
  color: #555;

  ${mediaQueries.tablet} {
    font-size: 0.95rem;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;

  ${mediaQueries.tablet} {
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;

    button {
      flex: 1;
      white-space: nowrap;
    }
  }

  ${mediaQueries.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

const SupplierInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;

  img {
    border-radius: 4px;
  }

  span {
    font-size: 0.85rem;
    color: #555;

    ${mediaQueries.tablet} {
      font-size: 0.9rem;
    }
  }
`;
