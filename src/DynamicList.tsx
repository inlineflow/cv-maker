import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import PlusIcon from "./assets/DynamicListPlus.svg?react";
type Style = "regular" | "small";

export type DynamicListProps = {
  items?: FC[];
  title?: string;
  style?: Style;
  blueprint?: FC;
};

export const DynamicList = ({
  items = [],
  title,
  style = "regular",
  blueprint,
}: DynamicListProps) => {
  const header =
    style === "regular" ? (
      <h3 className="text-2xl font-bold">{title}</h3>
    ) : (
      <h3 className="">{title}</h3>
    );

  // const baseChildren = makeChildren(items);
  const [children, setChildren] = useState(items);
  const btn = blueprint
    ? makeButton(style, children, setChildren, blueprint)
    : undefined;

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
  (
    children: FC[],
    setChildren: Dispatch<SetStateAction<FC[]>>,
    makeComponent: FC
  ) =>
  () => {
    // if (children.length === 0) return;
    // console.log("hello world");
    // const newChild = Object.assign({}, children[0]);
    // const newChild = cloneElement(children[0]({}));
    setChildren([...children, makeComponent]);
  };

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};

const makeButton = (
  style: Style,
  children: FC[],
  setChildren: Dispatch<SetStateAction<FC[]>>,
  makeComponent: FC
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
