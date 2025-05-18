import { View } from "@tarojs/components";
import React from "react";

export default function BlockComponent({
  children,
  title,
  extraTitle,
}: {
  children: React.ReactNode;
  title: string;
  extraTitle?: string;
}) {
  return (
    <View className="my-4">
      <View className="mb-2 flex justify-between items-end">
        <View className="text-lg font-bold">{title}</View>
        <View className="text-sm text-[#1D428A]">{extraTitle}</View>
      </View>
      {children}
    </View>
  );
}
