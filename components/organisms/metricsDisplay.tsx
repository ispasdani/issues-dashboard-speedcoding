import React from "react";
import Text from "../atoms/text";
import { Card, Container } from "@/utils/sharedStyled";
import { METRICS_TEXT } from "@/utils/constants";
import Label from "../atoms/label";

interface Metrics {
  active: number;
  closed: number;
  pending: number;
  resolved: number;
  awaitingInfo: number;
  avgResolutionTime: number;
}

interface MetricsDisplayProps {
  metrics: Metrics;
}

const MetricsDisplay = ({ metrics }: MetricsDisplayProps) => {
  return (
    <Container>
      <Text fontWeight="bold">Metrics</Text>
      <Container>
        <Card>
          <Label color="">{METRICS_TEXT.active}</Label>
          <Text>{metrics.active}</Text>
        </Card>
        <Card>
          <Label>{METRICS_TEXT.closed}</Label>
          <Text>{metrics.closed}</Text>
        </Card>
        <Card>
          <Label>{METRICS_TEXT.pending}</Label>
          <Text>{metrics.pending}</Text>
        </Card>
        <Card>
          <Label>{METRICS_TEXT.resolved}</Label>
          <Text>{metrics.resolved}</Text>
        </Card>
        <Card>
          <Label>{METRICS_TEXT.awaitingInfo}</Label>
          <Text>{metrics.awaitingInfo}</Text>
        </Card>
        <Card>
          <Label>{METRICS_TEXT.avgResolutionTime}</Label>
          <Text>{metrics.avgResolutionTime}</Text>
        </Card>
      </Container>
    </Container>
  );
};

export default MetricsDisplay;
