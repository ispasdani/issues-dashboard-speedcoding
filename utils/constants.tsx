export const METRICS_TEXT = {
  active: "Active",
  closed: "Closed Issues",
  pending: "Pending Issues",
  resolved: "Resolved Issues",
  awaitingInfo: "Awaiting Additional Info",
  avgResolutionTime: "Average Resolution Time (days)",
};

export const FILTER_STATUSES = [
  "All",
  "Active",
  "Closed",
  "Awaiting Additional Info",
  "Resolved",
  "Pending",
] as const;

export const ITEMS_PER_PAGE_OPTIONS = [5, 10, 15];

export const PAGINATION_TEXT = {
  previous: "Previous",
  next: "Next",
  itemsPerPage: "Items per page:",
};

export const MODAL_TEXT = {
  modalTitle: "Issue Details",
  modalClose: "Close",
};

type StatusType =
  | "Closed"
  | "Resolved"
  | "Awaiting Additional Info"
  | "Pending";

export const ISSUE_CARD_BUTTONS: { actionStatus: StatusType; text: string }[] =
  [
    { actionStatus: "Closed", text: "Close" },
    { actionStatus: "Awaiting Additional Info", text: "Request Info" },
    { actionStatus: "Resolved", text: "Resolve" },
    { actionStatus: "Pending", text: "Pending" },
  ];
