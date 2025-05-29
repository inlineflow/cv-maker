import type { JSX } from "react";
import { generateUUID, type UUID } from "./util/uuid";

export type BaseProps = {
  id: UUID;
};

type ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
) => ({ id }: BaseProps) => JSX.Element;

// export const cf: ComponentFactory = (Component, props?) => () =>
//   <Component {...(props ?? ({} as P))} />;

export const cf: ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
): (({ id }: BaseProps) => JSX.Element) => {
  return ({ id }: BaseProps) => {
    id = id ?? generateUUID();
    const newProps = { ...(props ?? ({} as P)), id: id };
    return <Component {...newProps} />;
  };
};
