import React, { useEffect } from "react";
import { useAnalyticsContext } from "../hooks/useAnalyticsContext";

const Main: React.FC = () => {
  const { fetchLatestAnalysis } = useAnalyticsContext();

  useEffect(() => {
    fetchLatestAnalysis();
  }, [fetchLatestAnalysis]);

  return (
    <>
      <h1>app dashboard</h1>
    </>
  );
};

export default Main;
