import { useState, type Dispatch, type FC, type SetStateAction } from "react";
import PlusIcon from "./assets/DynamicListPlus.svg?react";
type Style = "regular" | "small";
type ChildConstructor = (props?: any) => FC;
const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};
type Props = {
  items: string[] | FC[];
  title: string;
  style?: Style;
  constructor?: ChildConstructor;
};

const addChild =
  (
    children: FC[],
    setChildren: Dispatch<SetStateAction<FC[]>>,
    constructor: ChildConstructor
  ) =>
  () => {
    // if (children.length === 0) return;
    // console.log("hello world");
    // const newChild = Object.assign({}, children[0]);
    // const newChild = cloneElement(children[0]({}));
    setChildren([...children, constructor()]);
  };

const makeButton = (style: Style, children, setChildren, constructor) => {
  const btn = (
    <button
      onClick={addChild(children, setChildren, constructor)}
      className="cursor-pointer"
    >
      <PlusIcon className={btnStyles[style]} />
    </button>
  );

  return btn;
};

export const DynamicList = ({ items, title, style, constructor }: Props) => {
  style = style ?? "regular";
  const header =
    style === "regular" ? (
      <h3 className="text-2xl font-bold">{title}</h3>
    ) : (
      <h3 className="">{title}</h3>
    );

  // style === "regular" ? (
  //   <button className="cursor-pointer">
  //     <PlusIcon className="size-10 mt-2.5" />
  //   </button>
  // ) : (
  //   <button className="cursor-pointer">
  //     <PlusIcon className="size-8 mt-1.5" />
  //   </button>
  // );

  const baseChildren = makeChildren(items);
  const [children, setChildren] = useState(baseChildren);
  const btn = makeButton(style, children, setChildren, constructor);

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

function isStringArray(arr: string[] | FC[]): arr is string[] {
  return typeof arr[0] === "string";
}

function makeChildren(items: string[] | FC[]): FC[] {
  if (items.length === 0) return items as FC[];

  if (isStringArray(items)) {
    const result = items.map((s) => () => <li>{s}</li>);
    // const myFC: FC<string> = (s: string) => <li>{s}</li>;
    return result;
  }

  return items;
}
