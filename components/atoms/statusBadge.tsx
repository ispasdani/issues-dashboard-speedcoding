import styled from "styled-components";

const Badge = styled.span<{ status: string }>`
  padding: 4px 8px;
  background-color: ${({ status }) => {
    switch (status) {
      case "Active":
        return "#28a745";
      case "Resolved":
        return "#007bff";
      case "Pending":
        return "#ffc107";
      default:
        return "#6c757d";
    }
  }};
  color: #fff;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const StatusBadge = ({ status }: { status: string }) => (
  <Badge status={status}>{status}</Badge>
);

export default StatusBadge;
