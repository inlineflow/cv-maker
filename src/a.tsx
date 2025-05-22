// const myComponent = (abc: myProp) => <div>{abc}</div>;

import type { FC } from "react";

// const x: ComponentMaker<myProp> = (props?: myProp) => myComponent;
type MyProp = { name?: string; message?: string };

type ComponentMaker<P extends object> = (
  Component: FC<P>,
  props?: P
) => React.FC<P | undefined>;
export const myFactory: ComponentMaker<MyProp> = (Component, props?) => {
  const NewComponent = (runtimeProps?: object) => {
    const finalProps = {
      ...props,
      ...runtimeProps,
    };

    return <Component {...finalProps} />;
  };

  return NewComponent;
};
