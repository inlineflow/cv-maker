import { useState, type FC } from "react";
import { cf } from "./ComponentFactory";
import { AddButton } from "./AddButton";
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
}: //
DynamicListProps) => {
  const header =
    style === "regular" ? (
      <h3 className="text-2xl font-bold">{title}</h3>
    ) : (
      <h3 className="">{title}</h3>
    );

  // const baseChildren = makeChildren(items);
  const [children, setChildren] = useState(items);
  const Button = cf(AddButton, {
    style: "regular",
    onClick: () => {
      console.log([...children, blueprint!]);
      setChildren([...children, blueprint!]);
    },
  });

  // const Button = cf(InputButton, {
  //   style: "regular",
  //   InputBox: cf(InputBox, {
  //     label: { for: "mybox", text: "mybox" },
  //     fontColor: "dark",
  //   }),
  //   // callback: (e) => console.log(e),
  // });
  // const btn = blueprint
  //   ? makeButton(style, items, setChildren, blueprint)
  //   : null;

  const hasChildren = children.length > 0;
  return (
    <div className="w-max">
      {header}
      <ul className="list-none pl-5">
        {hasChildren &&
          children.map((Child, index) => (
            <li>
              <Child key={index} />
            </li>
          ))}
      </ul>
      {blueprint && <Button />}
    </div>
  );
};
