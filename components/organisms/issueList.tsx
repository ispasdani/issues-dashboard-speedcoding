import React, { useState } from "react";
import IssueCard from "@/components/molecules/issueCard";
import IssueModal from "@/components/organisms/issueModal";
import { Issue } from "@/utils/types";
import styled from "styled-components";
import {
  FILTER_STATUSES,
  ITEMS_PER_PAGE_OPTIONS,
  PAGINATION_TEXT,
} from "@/utils/constants";
import Label from "../atoms/label";
import Select from "../atoms/select";
import { Container } from "@/utils/sharedStyled";
import Text from "../atoms/text";
import Button from "../atoms/button";
import Pagination from "../molecules/pagination";

interface IssueListProps {
  issues: Issue[];
  onSetStatus: (issueId: number, newStatus: Issue["status"]) => void;
}

const IssueList = ({ issues, onSetStatus }: IssueListProps) => {
  const [filterStatus, setFilterStatus] =
    useState<(typeof FILTER_STATUSES)[number]>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);

  const filteredIssues =
    filterStatus === "All"
      ? issues
      : issues.filter((issue) => issue.status === filterStatus);

  const totalPages = Math.ceil(filteredIssues.length / itemsPerPage);
  const paginatedIssues = filteredIssues.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => setCurrentPage(newPage);
  const handleTitleClick = (issue: Issue) => setSelectedIssue(issue);
  const handleCloseModal = () => setSelectedIssue(null);

  return (
    <Container>
      <Text fontWeight="bold">Issues Dashboard</Text>

      <FilterContainer>
        {FILTER_STATUSES.map((status) => (
          <Button key={status} onClick={() => setFilterStatus(status)}>
            {status}
          </Button>
        ))}
      </FilterContainer>

      {paginatedIssues.map((issue) => (
        <IssueCard
          key={issue.id}
          title={issue.title}
          status={issue.status}
          assignedAgent={issue.assignedAgent}
          supplier={issue.supplier}
          onTitleClick={() => handleTitleClick(issue)}
          onSetStatus={(newStatus) => onSetStatus(issue.id, newStatus)}
        />
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        previousText={PAGINATION_TEXT.previous}
        nextText={PAGINATION_TEXT.next}
      />

      <ItemsPerPageSelector>
        <Label>{PAGINATION_TEXT.itemsPerPage}</Label>
        <Select
          value={itemsPerPage}
          onChange={(newItemsPerPage) => {
            setItemsPerPage(newItemsPerPage);
            setCurrentPage(1);
          }}
          options={ITEMS_PER_PAGE_OPTIONS}
        />
      </ItemsPerPageSelector>

      {selectedIssue && (
        <IssueModal issue={selectedIssue} onClose={handleCloseModal} />
      )}
    </Container>
  );
};

export default IssueList;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
`;

const ItemsPerPageSelector = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
