import { useEffect } from "react";
import { ThemeConfigProp } from "../types";
import darkTheme from "@/styles/dark-theme.less?inline";
import lightTheme from "@/styles/light-theme.less?inline";

const useTheme = (themeConfig: ThemeConfigProp) => {
  const { primary, isDark } = themeConfig;

  const initTheme = () => {
    // 切换暗黑模式
    let head = document.getElementsByTagName("head")[0];
    const getStyle = head.getElementsByTagName("style");

    // 先移除之前的样式
    if (getStyle.length > 0) {
      for (let i = 0, l = getStyle.length; i < l; i++) {
        if (getStyle[i]?.getAttribute("data-type") === "theme") {
          // 如果已经存在暗黑模式的样式，就删除
          getStyle[i].remove();
        }
      }
    }

    let styleDom = document.createElement("style");
    styleDom.dataset.type = "Theme";
    styleDom.innerHTML = isDark ? darkTheme : lightTheme;
    head.appendChild(styleDom);
  };

  useEffect(() => {
    initTheme();
  }, [themeConfig]);

  return {
    initTheme,
  };
};

export default useTheme;
