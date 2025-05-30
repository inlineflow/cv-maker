import type { JSX } from "react";
import { generateUUID } from "./util/uuid";
import type { IDProp } from "./types/prop";

type ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
) => ({ id }: IDProp) => JSX.Element;

// export const cf: ComponentFactory = (Component, props?) => () =>
//   <Component {...(props ?? ({} as P))} />;

export const cf: ComponentFactory = <P extends object>(
  Component: React.ComponentType<P>,
  props?: P
): (({ id }: IDProp) => JSX.Element) => {
  return ({ id }: IDProp) => {
    id = id ?? generateUUID();
    const newProps = { ...(props ?? ({} as P)), id: id };
    return <Component {...newProps} />;
  };
};
