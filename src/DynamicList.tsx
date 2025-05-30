import { useCallback, useState, type FC } from "react";
import { cf } from "./ComponentFactory";
import { AddButton } from "./AddButton";
// import { DLItem } from "./DynamicListItem";
import { generateUUID, type UUID } from "./util/uuid";
import { ValidityProvider } from "./DynamicListValidityProvider";
import type { IDProp } from "./types/prop";
type Style = "regular" | "small";

export type DynamicListProps = {
  items?: FC<IDProp>[];
  title?: string;
  style?: Style;
  className?: string;
  blueprint?: FC<IDProp>;
};

export const DynamicList = ({
  items = [],
  title,
  style = "regular",
  className = "max-w-full",
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
    items.map((i) => ({ Component: i, itemID: generateUUID() }))
  );
  // const [filterIDs, setFilterIDs] = useState<UUID[]>([]);
  // const filterOut = (id: UUID) => setFilterIDs((prevIDs) => [...prevIDs, id]);
  const Button = cf(AddButton, {
    style: "regular",
    onClick: () => {
      console.log([...children, blueprint!]);
      setChildren([
        ...children,
        { Component: blueprint!, itemID: generateUUID() },
      ]);
    },
    centered: true,
  });

  const handleReportValidity = useCallback(
    (id: UUID, isValid: boolean) => {
      if (!isValid) {
        console.log("child id in parent: ", id);
        console.log("regular children: ", children);
        const newChildren = children.filter((item) => item.itemID !== id);
        console.log("newChildren: ", newChildren);

        setChildren((prev) => prev.filter((item) => item.itemID !== id));
      }
    },
    [children, setChildren]
  );

  // const filteredChildren = children.filter(
  //   (item) => !filterIDs.includes(item.itemID)
  // );
  // const filteredChildren = children.filter((item) => predicate(item.itemID));

  const hasChildren = children.length > 0;
  return (
    <div className={className + " flex flex-col"}>
      {header}
      <ul
        className={
          "list-none flex flex-col gap-2.5" +
          (style === "regular" ? " pt-5" : "")
        }
      >
        <ValidityProvider onReportValidity={handleReportValidity}>
          {hasChildren &&
            children.map((child) => (
              <li key={child.itemID} className="w-fit">
                <child.Component id={child.itemID} />
              </li>
              // <DLItem
              //   Component={child.Component}
              //   itemId={child.itemID}
              //   filterOut={filterOut}
              //   className="w-fit"
              //   key={child.itemID}
              // />
            ))}
        </ValidityProvider>
      </ul>
      {blueprint && <Button id={generateUUID()} />}
    </div>
  );
};
