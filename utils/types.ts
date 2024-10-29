export interface IssueDetail {
  id: number;
  comment: string;
  type: string;
}

export interface Agent {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  profilePictureUrl: string;
}

export interface Supplier {
  id: number;
  name: string;
  number: string;
  logoUrl: string;
}

export interface Issue {
  id: number;
  title: string;
  status:
    | "Active"
    | "Resolved"
    | "Pending"
    | "Closed"
    | "Awaiting Additional Info";
  createdDate: string;
  closedDate: string | null;
  details: IssueDetail[];
  assignedAgent: Agent;
  supplier: Supplier;
}

export interface Metrics {
  open: number;
  closed: number;
  avgResolutionTime: number;
}
