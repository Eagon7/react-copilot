import { createContext, useContext, ReactNode, useReducer } from "react";

// 创建上下文
const AppContext = createContext<{ [key: string]: any } | null>(null);
const AppDispatch = createContext<{ [key: string]: any } | null>(null);

const initialState: AppContext = {
  theme: "light",
}; // 初始状态

// AppProvider 组件，提供上下文数据
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <AppDispatch.Provider value={dispatch}>{children}</AppDispatch.Provider>
    </AppContext.Provider>
  );
};
// reducer 提供修改方法
export function reducer(
  state: AppContext,
  action: { type: string; payload: any }
) {
  switch (action.type) {
    default:
      return state;
  }
}
// 方便使用
export function useAppState() {
  const state = useContext(AppContext);
  return state;
}
export function useAppDispatch() {
  const dispatch = useContext(AppDispatch);
  return dispatch;
}
