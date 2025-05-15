import { useState } from "react";

type Props = {
  label: string;
  labelClass: string;
  className: string;
};

export default function Inputbox({ label, className, labelClass }: Props) {
  const [s, setS] = useState("");
  const [vis, setVis] = useState("base");

  if (vis === "base") {
    return (
      <div className="flex flex-col not-last:pb-8 ">
        <label htmlFor="fname" className={labelClass ?? "text-xl"}>
          {label}
        </label>
        <input
          onChange={(event) => setS(event.target.value)}
          onKeyDown={(event) => {
            // console.log(event);
            if (event.nativeEvent.key === "Enter" && event.target.value != "")
              setVis("record");
          }}
          type="text"
          id="fname"
          value={s}
          className={className ?? "border-green-700 border-2 rounded-md p-2 "}
        />
      </div>
    );
  }
  if (vis === "record") {
    return (
      <p>
        <span onClick={() => setVis("base")} className="not-last:pb-8">
          {s}
        </span>
      </p>
    );
  }
}
