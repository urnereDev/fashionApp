import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import CustomTextField from "@/components/CustomTextField";
import Checkbox from "expo-checkbox";

const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <View style={{ marginVertical: 80 }}>
        <Text
          style={{ fontFamily: "outfit-b", fontSize: 30, textAlign: "center" }}
        >
          Create Account
        </Text>
        <View style={{ alignItems: "center", marginHorizontal: 15 }}>
          <Text
            style={{
              fontFamily: "outfit-r",
              color: Colors.GRAY,
              textAlign: "center",
            }}
          >
            Fill your information below or register with your social account.
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <Text style={{ fontFamily: "outfit-m" }}>Name</Text>
        <CustomTextField secureText={false} placeholderText="Enter your name" />
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 20,
        }}
      >
        <Checkbox
          style={{ marginRight: 5 }}
          value={isChecked}
          onValueChange={setIsChecked}
          color={Colors.PRIMARY}
        />
        <Text style={{ fontFamily: "outfit-r" }}>Agree with</Text>
        <Pressable style={{}}>
          <Text
            style={{
              fontFamily: "outfit-m",
              color: Colors.PRIMARY,
            }}
          >
            Terms & Condition
          </Text>
        </Pressable>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <CustomButton text="Sign Up" />
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
          Or sign up with
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
        <Text style={{ fontFamily: "outfit-r" }}>
          Already have an account?{" "}
        </Text>
        <Pressable onPress={() => router.push("/sign-in")}>
          <Text style={{ fontFamily: "outfit-m", color: Colors.PRIMARY }}>
            Sign In
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SignUp;
