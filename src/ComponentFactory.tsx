import type { JSX } from "react";
import type { UUID } from "./util/uuid";

type ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
) => (id: UUID) => JSX.Element;

// export const cf: ComponentFactory = (Component, props?) => () =>
//   <Component {...(props ?? ({} as P))} />;

export const cf: ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
): ((id: UUID) => JSX.Element) => {
  return (id: UUID) => <Component {...(props ?? ({} as P))} />;
};
