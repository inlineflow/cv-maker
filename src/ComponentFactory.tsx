import type { JSX } from "react";

type ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
) => () => JSX.Element;

export const cf: ComponentFactory = (Component, props) => () =>
  <Component {...props} />;
