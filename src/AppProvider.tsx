import { createContext, useContext, ReactNode, useReducer } from "react";
import { AppDispatch as AD } from "./types";
// 创建上下文
const AppContext = createContext<{ [key: string]: any } | null>(null);
const AppDispatch = createContext<AD>(null);

const initialState = {
  isDark: false,
}; // 初始状态

// AppProvider 组件，提供上下文数据
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(dispatch);
  return (
    <AppContext.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};
// reducer 提供修改方法
export function reducer(state: any, action: { type: string; payload: any }) {
  console.log(action);
  switch (action.type) {
    case "changeTheme":
      return { ...state, isDark: action.payload };
    default:
      return state;
  }
}
// 方便使用
export function useAppState() {
  const state = useContext(AppContext);
  return state;
}
export function useAppDispatch(): AD {
  const dispatch = useContext(AppDispatch);
  return dispatch || (() => {});
}
