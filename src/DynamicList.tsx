import { useState, type Dispatch, type JSX, type SetStateAction } from "react";
import PlusIcon from "./assets/DynamicListPlus.svg?react";
type Style = "regular" | "small";

export type ComponentMaker = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
) => () => JSX.Element;

export type ComponentConfig = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
) => ComponentMaker;

export type DynamicListProps<P extends object> = {
  items: React.ComponentType<P>[];
  title: string;
  style?: Style;
  makeComponent?: ComponentMaker;
};

export const DynamicList = <P extends object>({
  items,
  title,
  style,
  makeComponent,
}: DynamicListProps<P>) => {
  style = style ?? "regular";
  const header =
    style === "regular" ? (
      <h3 className="text-2xl font-bold">{title}</h3>
    ) : (
      <h3 className="">{title}</h3>
    );

  // const baseChildren = makeChildren(items);
  const [children, setChildren] = useState(items);
  const btn = makeButton(style, children, setChildren, makeComponent);

  const hasChildren = children.length > 0;
  return (
    <div>
      {header}
      <ul className="list-none pl-5">
        {hasChildren && children.map((Child, index) => <Child key={index} />)}
      </ul>
      {btn}
    </div>
  );
};

// function isStringArray(arr: string[] | FC[]): arr is string[] {
//   return typeof arr[0] === "string";
// }

// function makeChildren(items: string[] | FC[]): FC[] {
//   if (items.length === 0) return items as FC[];

//   if (isStringArray(items)) {
//     const result = items.map((s) => () => <li>{s}</li>);
//     // const myFC: FC<string> = (s: string) => <li>{s}</li>;
//     return result;
//   }

//   return items;
// }

const addChild =
  <P extends object>(
    children: React.ComponentType<P>[],
    setChildren: Dispatch<SetStateAction<React.ComponentType<P>[]>>,
    makeComponent: ComponentMaker
  ) =>
  () => {
    // if (children.length === 0) return;
    // console.log("hello world");
    // const newChild = Object.assign({}, children[0]);
    // const newChild = cloneElement(children[0]({}));
    setChildren([...children, makeComponent()]);
  };

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};

const makeButton = <P extends object>(
  style: Style,
  children: React.ComponentType<P>[],
  setChildren: Dispatch<SetStateAction<React.ComponentType<P>[]>>,
  makeComponent: ComponentMaker
) => {
  const handler = makeComponent
    ? addChild(children, setChildren, makeComponent)
    : undefined;

  const btn = (
    <button onClick={handler} className="cursor-pointer">
      <PlusIcon className={btnStyles[style]} />
    </button>
  );

  return btn;
};
