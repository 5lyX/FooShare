import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { memo, useCallback } from "react";
import DiscountCard from "./DiscountCard";
interface dealCard {
  id: number;
  deal: string;
  description: string;
  imageSource: any;
}
const data = [
  {
    id: 1,
    deal: "20% off",
    description: "20% off on Burgers",
    imageSource: require("../assets/images/restaurant1.jpg"),
  },
  {
    id: 2,
    deal: "40% off",
    description: "get 40% on your daily meals",
    imageSource: require("../assets/images/restaurant2.jpg"),
  },
  {
    id: 3,
    deal: "30% off",
    description: "20% off on Burgers",
    imageSource: require("../assets/images/restaurant1.jpg"),
  },
  {
    id: 4,
    deal: "10% off",
    description: "10% off on your first meal",
    imageSource: require("../assets/images/restaurant2.jpg"),
  },
];

const DiscountCardList = () => {
  console.log("re-rendered discount card list");
  const renderItem = useCallback(
    ({ item }: { item: dealCard }) => (
      <DiscountCard
        deal={item.deal}
        description={item.description}
        imageSource={item.imageSource}
      />
    ),
    []
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
  },
  listContainer: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 0,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
  },
  seeAll: {
    marginRight: 10,
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default DiscountCardList;
