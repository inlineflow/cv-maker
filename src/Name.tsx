import type { MyProp } from "./a";

export const Name = ({ name, message }: MyProp) => (
  <div>
    <p>
      {name}, {message}
    </p>
  </div>
);
