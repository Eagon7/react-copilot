import { useRef, useState } from "react";
import { useAppDispatch, useAppState } from "../../AppProvider";

const useRefDemo = () => {
  const dispatch = useAppDispatch();
  const state = useAppState();
  const handleTheme = () => {
    if (dispatch) dispatch({ type: "changeTheme", payload: true });
  };
  console.log(state);
  return (
    <div>
      <button onClick={handleTheme}>theme</button>
    </div>
  );
};

export default useRefDemo;
