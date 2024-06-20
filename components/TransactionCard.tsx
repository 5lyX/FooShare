import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link, router } from "expo-router";
import React from "react";
import { Fontisto } from "@expo/vector-icons";

export type transaction = {
  senderId: number;
  receiverId: number;
  restaurantId: number;
  transactionId: number;
  senderName: string;
  receiverName: string;
  productName: string;
  productEmoji: string;
  restaurantName: string;
  senderImage: any;
};
const TransactionCard = (transaction: transaction) => {
  const {
    senderId,
    receiverId,
    restaurantId,
    transactionId,
    senderName,
    receiverName,
    productName,
    productEmoji,
    restaurantName,
    senderImage,
  } = transaction;
  return (
    <View style={styles.card}>
      <View style={styles.firstContainer}>
        <View style={styles.imageContainer}>
          <Image source={senderImage} style={styles.senderImage} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text>
            <Text
              onPress={() =>
                router.push({
                  pathname: "/user/[userId]",
                  params: { userId: senderId },
                })
              }
              style={styles.senderText}
            >{`${senderName}`}</Text>
            <Text style={styles.text}>{` sent `}</Text>
            <Text
              onPress={() =>
                router.push({
                  pathname: "/user/[userId]",
                  params: { userId: receiverId },
                })
              }
              style={styles.receiverText}
            >{`${receiverName}`}</Text>
            <Text style={styles.text}>{` ${productEmoji}`}</Text>
            <Text style={styles.text}>{` at `}</Text>
            <Text
              onPress={() =>
                router.push({
                  pathname: "/restaurants/[restaurantId]",
                  params: {
                    restaurantId: restaurantId,
                    restaurantName: restaurantName,
                  },
                })
              }
              style={styles.restaurantText}
            >{`${restaurantName}`}</Text>
            <Text>{`\n`}</Text>
            <Text style={styles.productNameText}>{productName}</Text>
          </Text>
        </View>
      </View>
      <Text
        style={{
          alignSelf: "center",
          position: "absolute",
          right: 20,
          color: "grey",
        }}
      >
        12m <Fontisto color="grey" name="world-o" size={12}></Fontisto>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
  },
  imageContainer: {
    marginRight: 10,
  },
  senderImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  firstContainer: {
    flexDirection: "row",
    padding: 10,
    width: "70%",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "grey",
  },
  senderText: {
    fontSize: 13,
    color: "hotpink",
    fontWeight: "bold",
  },
  receiverText: {
    fontSize: 13,
    color: "deepskyblue",
    fontWeight: "bold",
  },
  restaurantText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "grey",
    textDecorationLine: "underline",
  },
  productNameText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default React.memo(TransactionCard);
