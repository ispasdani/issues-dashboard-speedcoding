import GenericCircularChart from "@/components/organisms/genericCircularChart";
import { Issue } from "@/utils/types";

interface ResolvedIssuesCircularChartProps {
  data: Issue[];
}

const ResolvedIssuesCircularChart = ({
  data,
}: ResolvedIssuesCircularChartProps) => (
  <GenericCircularChart
    data={data}
    status="Resolved"
    label="Resolved Issues"
    backgroundColor="#4CAF50"
    hoverBackgroundColor="#4CAF50"
  />
);

export default ResolvedIssuesCircularChart;
