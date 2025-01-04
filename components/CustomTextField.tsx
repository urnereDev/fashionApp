import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

interface CustomTextFieldProps {
  placeholderText: string;
  secureText: boolean;
}

const CustomTextField = ({
  placeholderText,
  secureText,
}: CustomTextFieldProps) => {
  const [secureTextController, setSecureTextController] = useState(true);
  const toggleSecureText = () => {
    setSecureTextController(!secureTextController);
  };
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 55,
        borderWidth: 0.5,
        borderColor: Colors.GRAY,
      }}
    >
      <TextInput
        secureTextEntry={secureTextController}
        style={{
          fontFamily: "outfit-r",
          borderRadius: 55,
          paddingLeft: 20,
        }}
        placeholder={placeholderText}
      />
      {secureText && (
        <Pressable onPress={toggleSecureText} style={{ marginRight: 10 }}>
          <Ionicons
            name={secureTextController ? "eye-outline" : "eye-off-outline"}
            size={24}
            color="black"
          />
        </Pressable>
      )}
    </View>
  );
};

export default CustomTextField;
