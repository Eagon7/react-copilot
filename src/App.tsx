import React from "react";
import { AppProvider, useAppDispatch, useAppState } from "./AppProvider";

export default function App() {
  return (
    <AppProvider>
      <ChildComponent />
    </AppProvider>
  );
}

function ChildComponent() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  return <div>{state?.theme}</div>;
}
