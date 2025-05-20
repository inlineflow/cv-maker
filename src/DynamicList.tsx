import plusIcon from "./assets/plus-svgrepo-com (1).svg";
type Prop = {
  items: Array<string>;
  title: string;
};

export const DynamicList = ({ items, title }: Prop) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      {items.map((i) => (
        <li>{i}</li>
      ))}
      <img src={plusIcon} alt="" className="size-12" />
    </div>
  );
};
