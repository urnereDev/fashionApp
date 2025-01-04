import { View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const HomeHeader = () => {
  return (
    <View
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Pressable
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          borderWidth: 1,
          width: "80%",
          height: 50,
          margin: 5,
          borderRadius: 99,
          gap: 3,
          borderColor: Colors.GRAY,
          backgroundColor: "white",
        }}
      >
        <Ionicons
          style={{ marginLeft: 10 }}
          name="search-outline"
          size={24}
          color={Colors.GRAY}
        />
        <Text style={{ fontFamily: "outfit-r", color: Colors.GRAY }}>
          Search
        </Text>
      </Pressable>
      <Pressable
        style={{
          width: 50,
          height: 50,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 99,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome6 name="sliders" size={20} color="white" />
      </Pressable>
    </View>
  );
};

export default HomeHeader;
