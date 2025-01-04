import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import Colors from "@/constants/Colors";

const HomeSwiper = () => {
  return (
    <View
      style={{
        height: 150,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        dotColor={Colors.GRAY}
        activeDotColor={Colors.PRIMARY}
      >
        <View style={styles.slide1}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View style={{ justifyContent: "center" }}>
              <Text
                style={{
                  fontFamily: "outfit-m",
                  fontSize: 15,
                }}
              >
                New season
              </Text>
              <Text
                style={{
                  fontFamily: "outfit-r",
                  textAlign: "center",
                  color: Colors.GRAY,
                  fontSize: 12,
                }}
              >
                Lorem ipsum dolor sit amet.{" "}
              </Text>
              <Pressable
                style={{
                  marginTop: 10,
                  width: 80,
                  backgroundColor: Colors.PRIMARY,
                  borderRadius: 7,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-m",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Buy now
                </Text>
              </Pressable>
            </View>
            <Image
              style={{ width: 120, height: 120 }}
              source={require("../assets/images/slider1.png")}
            />
          </View>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    </View>
  );
};

export default HomeSwiper;

const styles = StyleSheet.create({
  wrapper: { borderRadius: 15 },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.SECONDERY,
    borderRadius: 15,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.SECONDERY,
    borderRadius: 15,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.SECONDERY,
    borderRadius: 15,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
