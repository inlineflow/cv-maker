import type { JSX } from "react";
import { generateUUID, type UUID } from "./util/uuid";

type ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
) => ({ id }: { id?: UUID }) => JSX.Element;

// export const cf: ComponentFactory = (Component, props?) => () =>
//   <Component {...(props ?? ({} as P))} />;

export const cf: ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
): (({ id }: { id?: UUID }) => JSX.Element) => {
  return ({ id }: { id?: UUID }) => {
    id = id ?? generateUUID();
    const newProps = { ...(props ?? ({} as P)), id: id };
    return <Component {...newProps} />;
  };
};
