import { create } from "zustand";
import { Issue, Metrics } from "@/utils/types";

type IssueStore = {
  issues: Issue[];
  metrics: Metrics;
  loadIssues: (data: any[]) => void;
  closeIssue: (id: number) => void;
};

const calculateMetrics = (issues: Issue[]): Metrics => {
  const open = issues.filter((issue) => issue.status === "Active").length;
  const closed = issues.filter((issue) => issue.status === "Resolved").length;
  const avgResolutionTime =
    closed > 0
      ? issues
          .filter((issue) => issue.status === "Resolved")
          .reduce((acc, issue) => {
            if (issue.closedDate) {
              const createdDate = new Date(issue.createdDate);
              const closedDate = new Date(issue.closedDate);
              const resolutionTime =
                (closedDate.getTime() - createdDate.getTime()) /
                (1000 * 60 * 60 * 24);
              return acc + resolutionTime;
            }
            return acc;
          }, 0) / closed
      : 0;

  return { open, closed, avgResolutionTime: Math.round(avgResolutionTime) };
};

const useIssueStore = create<IssueStore>((set) => ({
  issues: [],
  metrics: { open: 0, closed: 0, avgResolutionTime: 0 },
  loadIssues: (data) => {
    const formattedIssues: Issue[] = data.map((issue) => ({
      ...issue,
      status: issue.status as "Active" | "Resolved" | "Pending",
    }));
    set({
      issues: formattedIssues,
      metrics: calculateMetrics(formattedIssues),
    });
  },
  closeIssue: (id) => {
    set((state) => {
      const updatedIssues = state.issues.map((issue) =>
        issue.id === id ? { ...issue, status: "Resolved" as "Resolved" } : issue
      );
      return {
        issues: updatedIssues,
        metrics: calculateMetrics(updatedIssues),
      };
    });
  },
}));

export default useIssueStore;
