import { Image, Swiper, SwiperItem } from "@tarojs/components";
import { useState } from "react";

export default function BannerComponent() {
  const [bannerList, setBannerList] = useState([
    {
      id: 1,
      image: "https://picsum.photos/id/1/250/300",
    },
    {
      id: 2,
      image: "https://picsum.photos/id/2/250/300",
    },
    {
      id: 3,
      image: "https://picsum.photos/id/3/250/300",
    },
  ]);

  return (
    <Swiper
      className="banner-swiper"
      indicatorColor="#999"
      indicatorActiveColor="#333"
      circular
      indicatorDots
      autoplay={true}
    >
      {bannerList.map((item) => (
        <SwiperItem key={item.id} className="rounded-lg overflow-hidden">
          <Image src={item.image} mode="aspectFill" className="flex w-full h-full" />
        </SwiperItem>
      ))}
    </Swiper>
  );
}
