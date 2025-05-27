import { useState, type FC } from "react";
import { cf } from "./ComponentFactory";
import { AddButton } from "./AddButton";
import { DLItem } from "./DynamicListItem";
import { generateUUID } from "./util/uuid";
type Style = "regular" | "small";

export type DynamicListProps = {
  items?: FC[];
  title?: string;
  style?: Style;
  // width?: string;
  blueprint?: FC;
};

export const DynamicList = ({
  items = [],
  title,
  style = "regular",
  // width = "w-max",
  blueprint,
}: //
DynamicListProps) => {
  const header =
    style === "regular" ? (
      <h3 className="text-2xl font-bold">{title}</h3>
    ) : (
      <h3 className="">{title}</h3>
    );

  // const baseChildren = makeChildren(items);
  const [children, setChildren] = useState(
    items.map((i) => ({ component: i, itemID: generateUUID() }))
  );
  const Button = cf(AddButton, {
    style: "regular",
    onClick: () => {
      console.log([...children, blueprint!]);
      setChildren([
        ...children,
        { component: blueprint!, itemID: generateUUID() },
      ]);
    },
  });

  const hasChildren = children.length > 0;
  return (
    <div className="max-w-full">
      {header}
      <ul className="list-none pl-5 flex flex-col gap-2.5">
        {hasChildren &&
          children.map((Child) => (
            // <DLItem
            //   Component={Child.component}
            //   itemId={Child.itemID}
            //   sendFilter={}
            //   key={Child.itemID}
            // />
            <li className="w-fit" key={Child.itemID}>
              <Child.component />
            </li>
          ))}
      </ul>
      {blueprint && <Button />}
    </div>
  );
};
