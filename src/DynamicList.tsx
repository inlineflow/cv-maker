import PlusIcon from "./assets/DynamicListPlus.svg?react";
type Props = {
  items: Array<string>;
  title: string;
  style?: "regular" | "small";
};

export const DynamicList = ({ items, title, style }: Props) => {
  const hasItems = items.length > 0;
  style = style ?? "regular";
  const header =
    style === "regular" ? (
      <h3 className="text-2xl font-bold">{title}</h3>
    ) : (
      <h3 className="">{title}</h3>
    );

  return (
    <div>
      {/* <h3 className="text-2xl font-bold">{title}</h3> */}
      {header}
      <ul className="list-none pl-5">
        {hasItems && items.map((i) => <li>{i}</li>)}
      </ul>
      {/* <img src={plusIcon} alt="" className="size-12" /> */}
      <PlusIcon className="size-10" />
    </div>
  );
};
