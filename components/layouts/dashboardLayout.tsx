"use client";

import React, { useMemo, useState } from "react";
import TrendChart from "@/components/organisms/trendChart";
import MetricsDisplay from "@/components/organisms/metricsDisplay";
import IssueList from "@/components/organisms/issueList";
import { Issue } from "@/utils/types";
import Sidebar from "../organisms/sidebar";
import styled from "styled-components";
import CircularChart from "../organisms/circularChart";
import ResolvedIssuesCircularChart from "../organisms/rsolvedIssuesCircularChart";
import { Row } from "@/utils/sharedStyled";

interface DashboardLayoutProps {
  issues: Issue[];
}

const DashboardLayout = ({ issues }: DashboardLayoutProps) => {
  const [updatedIssues, setUpdatedIssues] = useState<Issue[]>(issues);

  const metrics = useMemo(() => {
    const active = updatedIssues.filter(
      (issue) => issue.status === "Active"
    ).length;
    const closed = updatedIssues.filter(
      (issue) => issue.status === "Closed"
    ).length;
    const pending = updatedIssues.filter(
      (issue) => issue.status === "Pending"
    ).length;
    const resolved = updatedIssues.filter(
      (issue) => issue.status === "Resolved"
    ).length;
    const awaitingInfo = updatedIssues.filter(
      (issue) => issue.status === "Awaiting Additional Info"
    ).length;

    const avgResolutionTime =
      resolved > 0
        ? updatedIssues
            .filter(
              (issue) =>
                issue.status === "Resolved" &&
                issue.closedDate &&
                new Date(issue.closedDate) > new Date(issue.createdDate)
            )
            .reduce((acc, issue) => {
              const createdDate = new Date(issue.createdDate).getTime();
              const closedDate = new Date(issue.closedDate!).getTime();
              const resolutionTime =
                (closedDate - createdDate) / (1000 * 60 * 60 * 24);
              return acc + resolutionTime;
            }, 0) / resolved
        : 0;

    return {
      active,
      closed,
      pending,
      resolved,
      awaitingInfo,
      avgResolutionTime: Math.round(avgResolutionTime),
    };
  }, [updatedIssues]);

  const onSetStatus = (issueId: number, newStatus: Issue["status"]) => {
    setUpdatedIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === issueId
          ? {
              ...issue,
              status: newStatus,
              closedDate:
                newStatus === "Closed" || newStatus === "Resolved"
                  ? new Date().toISOString()
                  : issue.closedDate,
            }
          : issue
      )
    );
  };

  return (
    <DashboardWrapper>
      <Sidebar />

      <DashboardContent>
        <MetricsDisplay metrics={metrics} />
        <TrendChart data={updatedIssues} />
        <Row>
          <CircularChart data={updatedIssues} />
          <ResolvedIssuesCircularChart data={updatedIssues} />
        </Row>
        <IssueList issues={updatedIssues} onSetStatus={onSetStatus} />
      </DashboardContent>
    </DashboardWrapper>
  );
};

export default DashboardLayout;

const DashboardWrapper = styled.div`
  display: flex;
`;

const DashboardContent = styled.div`
  margin-left: 200px; /* Matches the sidebar width */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 200px);
  min-height: 100vh;
  padding: 1rem;
`;
