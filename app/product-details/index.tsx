import { View, Text, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const ProductDetails = () => {
  return (
    <View style={{ borderWidth: 1, flex: 1 }}>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            position: "absolute",
            left: 0,
            right: 0,
          }}
        >
          <Pressable
            onPress={router.back}
            style={{
              width: 50,
              height: 50,
              borderRadius: 99,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <AntDesign name="arrowleft" size={20} color="black" />
          </Pressable>
          <Text style={{ fontFamily: "outfit-m", fontSize: 18 }}>
            Product Details
          </Text>
          <Pressable
            style={{
              width: 50,
              height: 50,
              borderRadius: 99,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Ionicons name="heart" size={20} color={Colors.PRIMARY} />
          </Pressable>
        </View>
        <View
          style={{
            height: 400,
            backgroundColor: Colors.SECONDERY,
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
          }}
        ></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 10,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "outfit-r", color: Colors.GRAY }}>
            Female's Style
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
            <AntDesign
              style={{ marginRight: 1 }}
              name="star"
              size={15}
              color="yellow"
            />
            <Text style={{ fontFamily: "outfit-r" }}>4.5</Text>
          </View>
        </View>
        <Text style={{ fontFamily: "outfit-m", fontSize: 18, margin: 10 }}>
          Light Brown Jacket
        </Text>
        <View>
          <Text
            style={{
              fontFamily: "outfit-r",
              fontSize: 15,
              marginHorizontal: 10,
            }}
          >
            Product Details
          </Text>
          <Text
            style={{
              fontFamily: "outfit-r",
              fontSize: 12,
              marginHorizontal: 10,
              color: Colors.GRAY,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis eum
            velit dolorum alias, natus autem nesciunt quam, necessitatibus
            accusamus voluptates a, eveniet laboriosam molestias nisi
            voluptatibus expedita vero excepturi quas.
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontFamily: "outfit-r", fontSize: 15 }}>
            Select Size
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderWidth: 0.5,
              borderRadius: 10,
              justifyContent: "center",
              borderColor: Colors.GRAY,
            }}
          >
            <Text style={{ fontFamily: "outfit-r", textAlign: "center" }}>
              S
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          height: 80,
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          marginHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          borderTopWidth: 0.5,
          borderColor: Colors.GRAY,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <View>
          <Text style={{ fontFamily: "outfit-r", color: Colors.GRAY }}>
            Total Price
          </Text>
          <Text style={{ fontFamily: "outfit-m" }}>$85.97</Text>
        </View>
        <CustomButton text="Add to cart" onPress={() => {}} />
      </View>
    </View>
  );
};

export default ProductDetails;
