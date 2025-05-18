import Taro from "@tarojs/taro";

// 获取系统信息，包括状态栏高度
export const getNavBarInfo = () => {
  // 获取系统信息
  const systemInfo = Taro.getSystemInfoSync();
  // 获取状态栏高度
  const { statusBarHeight } = systemInfo;

  // 获取胶囊按钮信息
  const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();

  // 计算导航栏高度
  // 胶囊按钮距离顶部距离 - 状态栏高度 = 胶囊按钮与状态栏的间距
  // 该间距 × 2 + 胶囊按钮高度 + 状态栏高度 = 整个导航栏高度
  const navBarHeight =
    (menuButtonInfo.top - statusBarHeight!) * 2 +
    menuButtonInfo.height +
    statusBarHeight!;

  return {
    statusBarHeight, // 状态栏高度
    navBarHeight, // 导航栏总高度
    menuButtonInfo, // 胶囊按钮信息
    windowHeight: systemInfo.windowHeight, // 窗口高度
    windowWidth: systemInfo.windowWidth, // 窗口宽度
  };
};
