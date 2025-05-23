import {
  useEffect,
  useState,
  type Dispatch,
  type FC,
  type SetStateAction,
} from "react";
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
  const [adding, setAdding] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      if (adding && children.length > 0) {
        setAdding(false);
      }
    });
  });
  const btn = blueprint
    ? makeButton(style, children, setChildren, blueprint, setAdding)
    : null;

  const hasChildren = children.length > 0;
  return (
    <div>
      {header}
      <ul className="list-none pl-5">
        {hasChildren &&
          children.map((Child, index) => (
            <li>
              <Child key={index} />
            </li>
          ))}
      </ul>
      {blueprint && !adding && btn}
      {/* {null} */}
    </div>
  );
};

const makeButton = (
  style: Style,
  children: FC[],
  setChildren: Dispatch<SetStateAction<FC[]>>,
  makeComponent: FC,
  setAdding: Dispatch<SetStateAction<boolean>>
) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setChildren([...children, makeComponent]);
    setAdding(true);
  };

  const btn = (
    <button onClick={onClick} className="cursor-pointer">
      <PlusIcon className={btnStyles[style]} />
    </button>
  );

  return btn;
};

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};
