import { ReactNode } from "react";

export type LocationType = {
  pathname: string;
  url?: string;
  search?: string;
};

export type PageType = {
  path?: string;
  location?: LocationType;
  children?: Array<ReactNode>;
  default?: boolean;
};
