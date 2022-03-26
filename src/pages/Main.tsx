import React, { useEffect, useMemo, useState } from "react";
import { Container } from "../components/Container/Container.styled";
import { CustomInput } from "../components/Input/Input.styled";
import Subtitle from "../components/Typography/Subtitle";
import Text from "../components/Typography/Text";
import AnalysisDisplay from "../features/AnalysisDisplay";
import { useAnalyticsContext } from "../hooks/useAnalyticsContext";
import { HESchema, SESchema } from "../types/analytics";
import { renderDate } from "../utils/date";

const Main: React.FC = () => {
  const { fetchLatestAnalysis, matchAnalysis } = useAnalyticsContext();
  const [textSearch, setTextSearch] = useState("");

  const analysisStatus = matchAnalysis?.status === "pending" ? "TRWA" : "ZAKOŃCZONO";

  useEffect(() => {
    fetchLatestAnalysis();
  }, [fetchLatestAnalysis]);

  const handleInput = ({
    currentTarget: { value },
  }: React.SyntheticEvent<HTMLInputElement>) => {
    setTextSearch(value);
  };

  const scheduledEvents = useMemo((): SESchema[] => {
    const titleRegexValue = textSearch
      ? textSearch
          .split(" ")
          .map((word) => `(?=.*${word})`)
          .join("") + ".*"
      : ".*";

    const hasHistoryEvents = (historyEvents: HESchema[]): boolean => {
      return !!historyEvents.length;
    };

    const anyLateCheck = (historyEvents: HESchema[]): boolean => {
      return historyEvents.some((e) => !!e?.goalsAtRoundsEnd?.length);
    };

    const events = matchAnalysis?.scheduledEvents ?? [];
    const filtered = events.filter(
      ({ title, historyEvents }) =>
        title.match(new RegExp(titleRegexValue, "gi")) &&
        hasHistoryEvents(historyEvents) &&
        anyLateCheck(historyEvents)
    );

    return filtered;
  }, [matchAnalysis, textSearch]);

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
      <Text small>{`Status ${analysisStatus}`}</Text>

      <CustomInput
        className="my-4"
        placeholder="Filtruj po drużynie"
        type="text"
        value={textSearch}
        onChange={handleInput}
      />

      <AnalysisDisplay {...{ scheduledEvents }} />
    </Container>
  );
};

export default Main;
