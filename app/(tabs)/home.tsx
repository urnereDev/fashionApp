import { View, Text, Pressable } from "react-native";
import React from "react";
import HomeHeader from "@/components/HomeHeader";
import HomeSwiper from "@/components/HomeSwiper";
import HomeFlashSale from "@/components/HomeFlashSale";

const HomeScreen = () => {
  return (
    <View style={{ marginHorizontal: 5, marginTop: 10 }}>
      <HomeHeader />
      <HomeSwiper />
      <Text style={{ fontFamily: "outfit-m", marginLeft: 10 }}>Flash Sale</Text>
      <HomeFlashSale />
    </View>
  );
};

export default HomeScreen;
