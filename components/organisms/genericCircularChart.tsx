import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Issue } from "@/utils/types";
import Text from "@/components/atoms/text";
import { ChartWrapper, Container } from "@/utils/sharedStyled";
import { useMemo } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

interface GenericCircularChartProps {
  data: Issue[];
  status: Issue["status"];
  label: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
}

const GenericCircularChart = ({
  data,
  status,
  label,
  backgroundColor,
  hoverBackgroundColor,
}: GenericCircularChartProps) => {
  const chartData = useMemo(() => {
    const totalIssues = data.length;
    const statusCount = data.filter((issue) => issue.status === status).length;
    const statusPercentage = (statusCount / totalIssues) * 100;

    return {
      labels: [label, "Other Issues"],
      datasets: [
        {
          data: [statusPercentage, 100 - statusPercentage],
          backgroundColor: [backgroundColor, "#E0E0E0"],
          hoverBackgroundColor: [hoverBackgroundColor, "#B3B3B3"],
          borderWidth: 2,
        },
      ],
    };
  }, [data, status, label, backgroundColor, hoverBackgroundColor]);

  const chartOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) =>
            `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)}%`,
        },
      },
    },
  };

  return (
    <Container flexDirection="column">
      <Text fontWeight="bold">{label} Percentage</Text>
      <ChartWrapper>
        <Doughnut data={chartData} options={chartOptions} />
      </ChartWrapper>
    </Container>
  );
};

export default GenericCircularChart;
