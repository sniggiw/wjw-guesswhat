import { Image, View } from "@tarojs/components";
import { useEffect, useState } from "react";
import BlockComponent from "../../components/Block";
import BannerComponent from "./components/Banner";
import "./index.scss";

export default function Index() {
  const [hotRecommend, setHotRecommend] = useState<any[]>([]);

  useEffect(() => {
    setHotRecommend([
      { id: 1, icon: "https://picsum.photos/200", title: "NBA 球星" },
      { id: 2, icon: "https://picsum.photos/200", title: "历史人物" },
      { id: 3, icon: "https://picsum.photos/200", title: "音乐歌手" },
      { id: 4, icon: "https://picsum.photos/200", title: "动漫角色" },
      { id: 5, icon: "https://picsum.photos/200", title: "历史人物" },
    ]);
  }, []);

  return (
    <View className="w-screen h-screen bg-slate-50 px-2 pt-2">
      <BannerComponent />
      <BlockComponent title="热门推荐" extraTitle="查看更多">
        <View className="flex flex-nowrap gap-4 w-full overflow-x-auto">
          {hotRecommend.map((item) => (
            <View key={item.id} className="flex flex-col items-center">
              <Image src={item.icon} className="w-20 h-20 rounded-lg mb-2" />
              <View className="text-xs">{item.title}</View>
            </View>
          ))}
        </View>
      </BlockComponent>
    </View>
  );
}
