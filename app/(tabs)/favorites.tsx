import { View, Text } from "react-native";
import React from "react";
import HomeFlashSale from "@/components/HomeFlashSale";

const FavoritesScreen = () => {
  return (
    <View>
      <Text
        style={{
          fontFamily: "outfit-m",
          fontSize: 18,
          textAlign: "center",
          margin: 10,
        }}
      >
        Favorites
      </Text>
      <HomeFlashSale />
    </View>
  );
};

export default FavoritesScreen;
