import { RouteObject, useRoutes } from "react-router-dom";

import Login from "../pages/Login";

import { CustomRoute, ImportModuleType } from "../types";

const autoImport = import.meta.globEager("./modules/*.tsx") as Record<
  string,
  any
>;
const ImportArray: CustomRoute[] = [];
Object.keys(autoImport).forEach((item: string) => {
  Object.keys(autoImport[item]).forEach((key: any) => {
    ImportArray.push(...autoImport[item][key]);
  });
});

const RouterArray: CustomRoute[] = [
  {
    path: "/",
    element: <Login />,
    meta: {},
  },
  ...ImportArray,
];

console.log(RouterArray);
const Router = () => {
  return useRoutes(RouterArray);
};

export default Router;
// Uncaught Error: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.