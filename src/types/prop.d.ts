import type { Prettify } from "./prettify";

export type IDProp = {
  id: UUID;
};

export type PropsWithID<T> = Prettify<Partial<IDProp> & T>;