import { View, Text, Pressable } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

const HomeFlashSale = () => {
  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        <View
          style={{
            width: 50,
            borderWidth: 1,
            borderRadius: 99,
            borderColor: Colors.GRAY,
            backgroundColor: "white",
          }}
        >
          <Text style={{ textAlign: "center", fontFamily: "outfit-r" }}>
            All
          </Text>
        </View>
      </View>
      <Pressable
        onPress={() => router.push("/product-details")}
        style={{
          width: 150,
          height: 230,
          borderRadius: 5,
        }}
      >
        <View style={{ display: "flex" }}>
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 5,
              backgroundColor: Colors.PRIMARY,
              position: "relative",
            }}
          ></View>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 99,
              backgroundColor: Colors.SECONDERY,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              zIndex: 1,
              top: 5,
              right: 5,
            }}
          >
            <Ionicons name="heart" size={18} color={Colors.PRIMARY} />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              flex: 1,
              marginVertical: 5,
              fontFamily: "outfit-r",
              fontSize: 18,
            }}
          >
            Name
          </Text>
          <AntDesign
            style={{ marginRight: 1 }}
            name="star"
            size={15}
            color="yellow"
          />
          <Text
            style={{ fontFamily: "outfit-r", fontSize: 10, marginRight: 5 }}
          >
            4.5
          </Text>
        </View>
        <Text style={{ fontFamily: "outfit-m", fontSize: 20 }}>$85.00</Text>
      </Pressable>
    </View>
  );
};

export default HomeFlashSale;
