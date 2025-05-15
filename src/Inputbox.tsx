import { useState, type BaseSyntheticEvent, type SyntheticEvent } from "react";

type Props = {
  label: string;
  value: string;
};

export default function Inputbox({ label, value }: Props) {
  const [s, setS] = useState("");
  const [vis, setVis] = useState("base");

  const updateValue = (event: BaseSyntheticEvent) => {
    if (event) {
      // console.log(event.target.value);
      setS(event.target.value);
      // console.log(event);
    }
  };

  if (vis === "base") {
    return (
      <div className="flex flex-col not-last:pb-8 ">
        <label htmlFor="fname" className="text-xl">
          {label}
        </label>
        <input
          onChange={updateValue}
          onKeyDown={(event: BaseSyntheticEvent<KeyboardEvent>) => {
            console.log(event);
            if (event.nativeEvent.key === "Enter" && event.target.value != "")
              setVis("record");
          }}
          type="text"
          id="fname"
          value={s}
          className="border-green-700 border-2 rounded-md p-2 "
        />
      </div>
    );
  }
  if (vis === "record") {
    return (
      <p>
        <span onClick={() => setVis("base")}>{s}</span>
      </p>
    );
  }
}
