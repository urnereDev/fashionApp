import { Image, Pressable, Text, View } from "react-native";
import { useFonts } from "expo-font";
import Colors from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

import { useEffect } from "react";

export default function Index() {
  useFonts({
    "outfit-b": require("../assets/fonts/Outfit-Bold.ttf"),
    "outfit-m": require("../assets/fonts/Outfit-Medium.ttf"),
    "outfit-r": require("../assets/fonts/Outfit-Regular.ttf"),
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 400, resizeMode: "contain" }}
        source={require("../assets/images/Fashion blogging-amico.png")}
      />
      <Text
        style={{ fontFamily: "outfit-b", fontSize: 30, textAlign: "center" }}
      >
        The <Text style={{ color: Colors.PRIMARY }}>Fashion App</Text> That
        Makes You Look Your Best
      </Text>
      <Text
        style={{
          fontFamily: "outfit-r",
          color: Colors.GRAY,
          textAlign: "center",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro
        voluptate veritatis possimus.
      </Text>
      <CustomButton text="Let's Get Started" onPress={() => {}} />
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={{ fontFamily: "outfit-m" }}>
          Already have an account?{" "}
        </Text>
        <Pressable onPress={() => router.push("/sign-in")}>
          <Text style={{ fontFamily: "outfit-b", color: Colors.PRIMARY }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
