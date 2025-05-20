import plusIcon from "./assets/plus-svgrepo-com (1).svg";
type Props = {
  items: Array<string>;
  title: string;
};

export const DynamicList = ({ items, title }: Props) => {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="list-none pl-5">
        {items.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      <img src={plusIcon} alt="" className="size-12" />
    </div>
  );
};
