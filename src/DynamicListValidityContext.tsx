import { createContext, useContext } from "react";
import type { UUID } from "./util/uuid";

export type ValidityReporter = (id: UUID, isValid: boolean) => void;
export const ValidityContext = createContext<ValidityReporter | undefined>(
  undefined
);
export const useValidity = (): ValidityReporter => {
  const context = useContext(ValidityContext);
  if (!context) {
    throw new Error("useValidity must be used within a ValidityProvider");
  }

  return context;
};
