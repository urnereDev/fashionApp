import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import CustomTextField from "@/components/CustomTextField";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <View style={{ marginVertical: 80 }}>
        <Text
          style={{ fontFamily: "outfit-b", fontSize: 30, textAlign: "center" }}
        >
          Sign In
        </Text>
        <Text
          style={{
            fontFamily: "outfit-r",
            color: Colors.GRAY,
            textAlign: "center",
          }}
        >
          Hi! Welcome back, you've been missed.
        </Text>
      </View>
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Text style={{ fontFamily: "outfit-m" }}>Email</Text>
        <CustomTextField
          secureText={false}
          placeholderText="Enter your email address"
        />
      </View>
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Text style={{ fontFamily: "outfit-m" }}>Password</Text>
        <CustomTextField
          secureText={true}
          placeholderText="Enter your password"
        />
      </View>
      <Pressable
        style={{ display: "flex", alignItems: "flex-end", marginRight: 20 }}
      >
        <Text
          style={{
            fontFamily: "outfit-m",
            color: Colors.PRIMARY,
            textAlign: "right",
          }}
        >
          Forgot Password?
        </Text>
      </Pressable>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CustomButton text="Sign In" onPress={() => router.push("/home")} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 30,
        }}
      >
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: Colors.GRAY,
            marginLeft: 50,
          }}
        />
        <Text style={{ marginHorizontal: 10, color: Colors.GRAY }}>
          Or sign in with
        </Text>
        <View
          style={{
            flex: 1,
            height: 1,
            backgroundColor: Colors.GRAY,
            marginRight: 50,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Pressable
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: 50,
            height: 50,
            borderRadius: 99,
            borderWidth: 1,
            borderColor: Colors.GRAY,
          }}
        >
          <Image
            source={require("../../assets/images/google-logo.png")}
            style={{ width: 40, height: 40 }}
          />
        </Pressable>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontFamily: "outfit-r" }}>Don't have an account? </Text>
        <Pressable onPress={() => router.push("/sign-up")}>
          <Text style={{ fontFamily: "outfit-m", color: Colors.PRIMARY }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignIn;
