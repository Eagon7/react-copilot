import { AppProvider, useAppDispatch, useAppState } from "./AppProvider";
import Layouts from "./layouts/";
import Router from "./router";
import { HashRouter } from "react-router-dom";
export default function App() {
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
