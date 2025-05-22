// const myComponent = (abc: myProp) => <div>{abc}</div>;

import type { JSX, ReactElement } from "react";

// import type { FC } from "react";

// // const x: ComponentMaker<myProp> = (props?: myProp) => myComponent;
// export type MyProp = { name?: string; message?: string };

// // type ComponentMaker<P extends object> = (
// //   Component: FC<P>,
// //   props?: P
// // ) => React.FC<P | undefined>;
// type ComponentMaker = <P extends object>(
//   Component: FC<P>,
//   props?: P
// ) => React.FC<P | undefined>;

// export const myFactory: ComponentMaker = (Component, props?) => {
//   const NewComponent = (runtimeProps?) => {
//     const finalProps = {
//       ...props,
//       ...runtimeProps,
//     };

//     return <Component {...finalProps} />;
//   };

//   return NewComponent;
// };
// type ComponentMaker = <
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   T extends React.JSXElementConstructor<any>
// >(
//   Component: T,
//   props: React.ComponentProps<T>
// ) => () => JSX.Element;

type ComponentMaker = <P extends object>(
  Component: React.ComponentType<P>,
  props: P
) => () => JSX.Element;

const myComponent = ({ name, message }: { name: string; message: string }) => {
  return (
    <p>
      {name}, {message}
    </p>
  );
};

const componentFactory: ComponentMaker = (Component, props) => () =>
  <Component {...props} />;

export const Comp = componentFactory(myComponent, {
  name: "bob",
  message: "hello world",
});
