import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 0.5,
        justifyContent: "space-between",
        alignItems: "center",
        borderColor: Colors.GRAY,
        margin: 5,
        padding: 10,
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: Colors.SECONDERY,
          borderRadius: 15,
        }}
      ></View>
      <View style={{ gap: 10 }}>
        <Text style={{ fontFamily: "outfit-m", fontSize: 15 }}>
          Brown Jacket
        </Text>
        <Text
          style={{ fontFamily: "outfit-r", fontSize: 13, color: Colors.GRAY }}
        >
          Size: L
        </Text>
        <Text style={{ fontFamily: "outfit-b", fontSize: 18 }}>$85.50</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Pressable
          onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.GRAY,
          }}
        >
          <AntDesign name="minus" size={15} color="black" />
        </Pressable>
        <Text
          style={{ fontFamily: "outfit-m", fontSize: 18, textAlign: "center" }}
        >
          {quantity}
        </Text>
        <Pressable
          onPress={() => setQuantity(quantity + 1)}
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: Colors.PRIMARY,
          }}
        >
          <AntDesign name="plus" size={15} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItems;
