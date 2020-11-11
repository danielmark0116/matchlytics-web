import { useContext } from "react";
import {
  AnalyticsContext,
  AnalyticsContextData,
} from "../contexts/AnalyticsContext";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAnalyticsContext = (): AnalyticsContextData => {
  const analyticsContext = useContext(AnalyticsContext);

  if (analyticsContext === null) {
    throw new Error(
      "This hook must be used in a component with an <AnalyticsProvider />"
    );
  }

  return analyticsContext;
};
