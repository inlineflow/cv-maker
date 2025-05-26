import type { JSX } from "react";

type ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
) => (optionalProps: Partial<P>) => JSX.Element;

export const cf: ComponentFactory = (Component, props) => (optionalProps) =>
  <Component {...props} {...optionalProps} />;
