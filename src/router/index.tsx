import { useRoutes } from "react-router-dom";

import { CustomRoute } from "../types";

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

const RouterArray: CustomRoute[] = [...ImportArray];

const Router = () => {
  return useRoutes(RouterArray);
};

export default Router;
