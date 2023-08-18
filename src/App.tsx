import { useEffect } from "react";
import { AppProvider, useAppDispatch, useAppState } from "./AppProvider";
import useTheme from "./hooks/useTheme";
import Layouts from "./layouts/";
import Router from "./router";
import { HashRouter } from "react-router-dom";
export default function App() {
  useTheme({ isDark: true, primary: "red" });
  return (
    <HashRouter>
      <AppProvider>
        <Router />
      </AppProvider>
    </HashRouter>
  );
}

function ChildComponent() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  return <div>{state?.theme}</div>;
}
