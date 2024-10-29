import React from "react";
import styled from "styled-components";

interface StatusProps {
  status: string;
}

const Status = ({ status }: StatusProps) => {
  return <StatusStyled status={status}>{status}</StatusStyled>;
};

export default Status;

const StatusStyled = styled.span<{ status: string }>`
  font-size: 0.9rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-weight: bold;
  color: ${({ status }) =>
    status === "Closed"
      ? "#d8316e"
      : status === "Resolved"
      ? "#169e97"
      : status === "Awaiting Additional Info"
      ? "#7f69f1"
      : status === "Pending"
      ? "#fdc85c"
      : status === "Active"
      ? "#007bff"
      : "black"};
  margin-right: 1rem;
  background-color: ${({ status }) =>
    status === "Closed"
      ? "#fae8ef"
      : status === "Resolved"
      ? "#e4f4f4"
      : status === "Awaiting Additional Info"
      ? "#efeafc"
      : status === "Pending"
      ? "#fef6ea"
      : status === "Active"
      ? "#bed9f6"
      : "black"};
`;
