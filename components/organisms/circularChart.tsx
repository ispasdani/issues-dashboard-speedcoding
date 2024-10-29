import GenericCircularChart from "@/components/organisms/genericCircularChart";
import { Issue } from "@/utils/types";

interface ActiveIssuesCircularChartProps {
  data: Issue[];
}

const ActiveIssuesCircularChart = ({
  data,
}: ActiveIssuesCircularChartProps) => (
  <GenericCircularChart
    data={data}
    status="Active"
    label="Active Issues"
    backgroundColor="#36A2EB"
    hoverBackgroundColor="#36A2EB"
  />
);

export default ActiveIssuesCircularChart;
