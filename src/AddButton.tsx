import PlusIcon from "./assets/DynamicListPlus.svg?react";
type Style = "regular" | "small";
type AddButtonProps = {
  style: Style;
  onClick: () => void;
  centered?: boolean;
};

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};

export const AddButton = ({
  style = "regular",
  onClick,
  centered = false,
}: AddButtonProps) => {
  const classes = [];
  if (centered) classes.push("self-center justify-self-center");
  classes.push("cursor-pointer");
  const btn = (
    <button onClick={onClick} className={classes.join(" ")}>
      <PlusIcon className={btnStyles[style]} />
    </button>
  );
  return btn;
};
