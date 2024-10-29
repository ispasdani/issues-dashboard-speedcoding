import React from "react";
import styled from "styled-components";
import Button from "../atoms/button";
import Label from "../atoms/label";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  previousText?: string;
  nextText?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  previousText = "Previous",
  nextText = "Next",
}: PaginationProps) => {
  return (
    <PaginationContainer>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        {previousText}
      </Button>
      <Label>
        Page {currentPage} of {totalPages}
      </Label>
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {nextText}
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  width: 100%;

  button {
    padding: 0.25rem 0.5rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;

    &:disabled {
      background-color: #ddd;
      cursor: not-allowed;
    }
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`;
