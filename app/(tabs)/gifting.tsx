import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  useWindowDimensions,
} from "react-native";

import BackButton from "../../components/BackButton";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import SearchBox from "../../components/SearchBox";
import DiscountCardList from "../../components/DiscountCardList";
import GiftCardList from "../../components/GiftCardList";
import TransactionCard from "../../components/TransactionCard";
import { transaction } from "../../components/TransactionCard";
import transactionDummyData from "../../constants/transactionDummyData";
import { Layout } from "react-native-tab-view/lib/typescript/src/types";
import { router } from "expo-router";
import FriendRequestIcon from "../../components/FriendRequestIcon";

const renderTransaction = ({ item }: { item: transaction }) => (
  <TransactionCard
    transactionId={item.transactionId}
    senderName={item.senderName}
    receiverName={item.receiverName}
    productName={item.productName}
    restaurantName={item.restaurantName}
    productEmoji={item.productEmoji}
    senderImage={item.senderImage}
    senderId={item.senderId}
    receiverId={item.receiverId}
    restaurantId={item.restaurantId}
  />
);

export default function GiftScreen() {
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [numberOfFriendRequests, setNumberOfFriendRequests] = useState(11);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: height * 0.06 }}></View>
      <SearchBox placeholder="Search for people" />
      <View style={styles.childContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>My FooGifts 😳</Text>
          <Text style={styles.seeAllButton}>see all</Text>
        </View>
      </View>
      <View style={styles.giftCardList}>
        <GiftCardList />
      </View>

      <View style={styles.childContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>FRIEND FEED 💗</Text>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/features/friends/friendsList",
                  params: { numberOfFriendRequests: numberOfFriendRequests },
                })
              }
            >
              <MaterialIcons name="group" size={30} color="deepskyblue" />
            </Pressable>
            <FriendRequestIcon
              numberOfFriendRequests={numberOfFriendRequests}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 160 }}
          data={transactionDummyData}
          renderItem={renderTransaction}
        />
      </View>

      <View
        style={[
          styles.bottomButtonContainer,
          { bottom: height * 0.1, left: width * 0.3 },
        ]}
      >
        <TouchableOpacity onPress={() => router.push("/features/sendFood")}>
          <View style={styles.bottomButton}>
            <View style={[styles.rowContainer, { justifyContent: "center" }]}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "white" }}
              >{`Send Food  `}</Text>
              <FontAwesome5 name="paper-plane" size={18} color="white" />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
  },
  childContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: "white",
    gap: 20,
    width: "100%",
    // alignItems: "flex-start",
    // justifyContent: "center",
    // flexDirection: "column",
  },
  rowContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  seeAllButton: {
    color: "grey",
    fontSize: 18,
    textDecorationLine: "underline",
  },
  giftCardList: {
    flex: 0.2,
    minHeight: "1%",
  },
  bottomButtonContainer: {
    flex: 1,
    position: "absolute",
    width: "40%",
    justifyContent: "center",
    // alignItems: "center",
  },
  bottomButton: {
    width: "100%",
    alignSelf: "center",
    height: "100%",
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 2,
    padding: 12,
    backgroundColor: "deepskyblue",
    shadowColor: "deepskyblue",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
