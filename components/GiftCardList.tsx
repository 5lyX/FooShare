import React from "react";
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import GiftCard from "./GiftCard";
import { AntDesign, Entypo } from "@expo/vector-icons";

type gift = {
  giftId: number;
  isCardOpened: boolean;
  emoji: string;
  foodItem: string;
  imageSource: any;
  senderUsername: string;
  text: string;
};

const data: gift[] = [
  {
    giftId: 1,
    isCardOpened: false,
    emoji: "🍹",
    foodItem: "Banana Shake",
    imageSource: require("../assets/images/pfp1.png"),
    senderUsername: "Mariana",
    text: "Happy Birthday !!",
  },
  {
    giftId: 2,
    isCardOpened: false,
    emoji: "🍹",
    foodItem: "Banana Shake",
    imageSource: require("../assets/images/pfp1.png"),
    senderUsername: "Mariana",
    text: "Happy Birthday !!",
  },
  {
    giftId: 3,
    emoji: "🍹",
    foodItem: "Banana Shake",
    isCardOpened: false,
    imageSource: require("../assets/images/pfp1.png"),
    senderUsername: "Mariana",
    text: "Happy Birthday !!",
  },
  {
    giftId: 4,
    emoji: "🍹",
    foodItem: "Banana Shake",
    isCardOpened: false,
    imageSource: require("../assets/images/pfp1.png"),
    senderUsername: "Mariana",
    text: "Happy Birthday !!",
  },
  // Add more data items as needed
];

const GiftCardList = () => {
  const renderEmojiItem = ({ item }: { item: gift }) => (
    <View style={styles.item}>
      {/* <Text style={styles.emoji}>{item.emoji}</Text> */}
      <AntDesign name="gift" size={24} style={styles.icon} />
    </View>
  );

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/defaultGift.jpg")}
          style={styles.image}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderEmojiItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    minHeight: 80,
    minWidth: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "white",
    padding: 24,
    borderColor: "hotpink",
    borderWidth: 2,
    // marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "hotpink",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },
  icon: {
    color: "hotpink",
    borderStyle: "dashed",
    alignSelf: "center",
    fontSize: 30,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
});

export default GiftCardList;
