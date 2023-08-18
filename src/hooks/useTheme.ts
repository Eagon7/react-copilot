import { useEffect } from "react";
import { ThemeConfigProp } from "../types";

const useTheme = (themeConfig: ThemeConfigProp) => {
  const initTheme = () => {
    // 切换暗黑模式
    let head = document.getElementsByTagName("head")[0];
    const getStyle = head.getElementsByTagName("style");
    if (getStyle.length > 0) {
      for (let i = 0, l = getStyle.length; i < l; i++) {}
      console.log(getStyle.length);
    }
  };

  useEffect(() => {
    initTheme();
  }, [themeConfig]);

  return {
    initTheme,
  };
};

export default useTheme;
