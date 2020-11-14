import React, { useEffect, useMemo } from "react";
import { Container } from "../components/Container/Container.styled";
import Subtitle from "../components/Typography/Subtitle";
import Text from "../components/Typography/Text";
import AnalysisDisplay from "../features/AnalysisDisplay";
import { useAnalyticsContext } from "../hooks/useAnalyticsContext";
import { SESchema } from "../types/analytics";
import { renderDate } from "../utils/date";

const Main: React.FC = () => {
  const { fetchLatestAnalysis, matchAnalysis } = useAnalyticsContext();

  useEffect(() => {
    fetchLatestAnalysis();
  }, [fetchLatestAnalysis]);

  const scheduledEvents = useMemo(
    (): SESchema[] => matchAnalysis?.scheduledEvents ?? [],
    [matchAnalysis]
  );

  if (!matchAnalysis) {
    return (
      <Container>
        <Subtitle>Brak analiz</Subtitle>
      </Container>
    );
  }

  return (
    <Container>
      <Subtitle>Najnowsza analiza</Subtitle>
      <Text light>{"Data: " + renderDate(matchAnalysis?.createdAt)}</Text>

      <AnalysisDisplay {...{ scheduledEvents }} />
    </Container>
  );
};

export default Main;
