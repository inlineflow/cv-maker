import { useRef } from "react";

type TextAreaProps = {
  id: string;
  text: string;
  setText: (s: string) => void;
  isActive: boolean;
  onClick: () => void;
};

export const TextArea = ({
  id,
  text,
  setText,
  isActive,
  onClick,
}: TextAreaProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  if (isActive)
    return (
      <textarea
        id={id}
        name={id}
        ref={ref}
        onChange={() => setText(ref.current!.value)}
      >
        {text}
      </textarea>
    );

  return <p onClick={onClick}>{text}</p>;
};
