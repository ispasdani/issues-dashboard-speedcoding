import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Issue } from "@/utils/types";
import { useMemo } from "react";
import Text from "@/components/atoms/text";
import { ChartWrapper, Container } from "@/utils/sharedStyled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface TrendChartProps {
  data: Issue[];
}

const TrendChart = ({ data }: TrendChartProps) => {
  const chartData = useMemo(() => {
    const sortedData = [...data].sort(
      (a, b) =>
        new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
    );

    const labels = sortedData.map((issue) =>
      new Date(issue.createdDate).toLocaleDateString()
    );

    const issueCounts = labels.map(
      (label) =>
        sortedData.filter(
          (issue) => new Date(issue.createdDate).toLocaleDateString() === label
        ).length
    );

    return {
      labels,
      datasets: [
        {
          label: "Issues Over Time",
          data: issueCounts,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  }, [data]);

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Container flexDirection="column">
      <Text fontWeight="bold">Trends</Text>
      <ChartWrapper width="100%">
        <Line data={chartData} options={chartOptions} />
      </ChartWrapper>
    </Container>
  );
};

export default TrendChart;
