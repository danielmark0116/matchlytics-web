import React, { useCallback, useEffect, useState } from "react";
import { AnalyticsContext } from "../contexts/AnalyticsContext";
import { useAuthContext } from "../hooks/useAuth";
import { ASchema } from "../types/analytics";
import { updateToken } from "../utils/axios";
import config from "../config";
import axios from "axios";

const API = config.apiBase;

const AnalyticsProvider: React.FC = ({ children }) => {
  const [matchAnalysis, setMatchAnalysis] = useState<ASchema | null>(null);
  const { accessToken } = useAuthContext();

  const fetchLatestAnalysis = useCallback(async () => {
    try {
      if (!accessToken) {
        throw new Error("No accessToken to fetch analysis");
      }

      updateToken(accessToken);

      const analysis: ASchema = (await axios.get(API + "/api/scrapper")).data
        .data[0];

      console.log("Fetched");

      setMatchAnalysis(analysis ?? null);
    } catch (e) {
      console.log();
    }
  }, [accessToken]);

  const triggerNewAnalysis = useCallback(async () => {
    try {
      if (!accessToken) {
        throw new Error("No accessToken to fetch analysis");
      }

      updateToken(accessToken);

      const started: boolean =
        (await axios.post(API + "/api/scrapper"))?.data?.success ?? false;

      console.log("Analysis started: ", started);
    } catch (e) {
      console.log(e);
    }
  }, [accessToken]);

  useEffect(() => {
    console.log(matchAnalysis);
  }, [matchAnalysis]);

  return (
    <AnalyticsContext.Provider
      value={{
        fetchLatestAnalysis,
        triggerNewAnalysis,
        matchAnalysis,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
