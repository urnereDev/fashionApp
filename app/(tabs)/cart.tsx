import { View, Text, Alert, Button } from "react-native";
import React, { useEffect, useState } from "react";
import CartItems from "@/components/CartItems";
import CustomButton from "@/components/CustomButton";
import Colors from "@/constants/Colors";
import { useStripe } from "@stripe/stripe-react-native";

const CartScreen = () => {
  const [payableAmount, setPayableAmount] = useState(600);
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.API_KEY;
  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ amount: payableAmount }),
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    try {
      const { paymentIntent, ephemeralKey, customer } =
        await fetchPaymentSheetParams();
      const { error } = await initPaymentSheet({
        merchantDisplayName: "BMO",
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        allowsDelayedPaymentMethods: true,
        defaultBillingDetails: {
          name: "Jane Doe",
        },
      });
      if (error) {
        console.error("Payment sheet initialization error:", error);
      } else {
        setLoading(true);
      }
    } catch (error) {
      console.error("Error initializing payment sheet:", error);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
    // see below
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontFamily: "outfit-m",
          fontSize: 18,
          textAlign: "center",
          margin: 10,
        }}
      >
        My Cart
      </Text>
      <CartItems />

      <View
        style={{
          height: 120,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopWidth: 0.5,
          borderColor: Colors.GRAY,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Text style={{ fontFamily: "outfit-r" }}>Total Cost:</Text>
          <Text style={{ fontFamily: "outfit-b" }}>$575.50</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomButton
            text="Payment"
            onPress={async () => {
              await initializePaymentSheet().then(async () => {
                await openPaymentSheet();
              });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
