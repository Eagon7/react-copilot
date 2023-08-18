import { ReactNode } from "react";
import {
  IndexRouteObject,
  NonIndexRouteObject,
  RouteObject,
} from "react-router-dom";

type ReactElement = React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
>;
type AppContext = {
  theme: string;
};
export type ImportModuleType = {
  default: {
    path: string;
    component: React.ReactNode;
    name: string;
  };
};

type MetaProps = {
  title?: string;
  icon?: ReactElement;
  isLink?: string;
  [key: string]: any;
};

interface CustomRouteObject extends IndexRouteObject {
  meta: {
    title?: string;
    icon?: ReactElement;
    isLink?: string;
  };
}
interface NonCustomRouteObject extends NonIndexRouteObject {
  meta: {
    title?: string;
    icon?: ReactElement;
    isLink?: string;
  };
}
export type CustomRoute = CustomRouteObject | NonCustomRouteObject;

type ImportModule = {
  [key: string]: Promise<any>;
};

export interface ThemeConfigProp {
  primary: string;
  isDark: boolean;
}

export type AppDispatch = React.Dispatch<{
  type: string;
  payload: any;
}> | null;
