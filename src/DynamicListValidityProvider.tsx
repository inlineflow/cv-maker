import {
  ValidityContext,
  type ValidityReporter,
} from "./DynamicListValidityContext";

type ValidityProviderProps = {
  children: React.ReactNode;
  onReportValidity: ValidityReporter;
};

export const ValidityProvider = ({
  children,
  onReportValidity,
}: ValidityProviderProps) => {
  return (
    <ValidityContext.Provider value={onReportValidity}>
      {children}
    </ValidityContext.Provider>
  );
};
