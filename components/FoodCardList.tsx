// FoodCardList.tsx
import React, { useCallback } from "react";
import { View, ScrollView, Text, StyleSheet, FlatList } from "react-native";
import FoodCard from "./FoodCard";

const data = [
  { emoji: "🍕", name: "Snacks" },
  { emoji: "🍞", name: "Breakfast" },
  { emoji: "🍔", name: "Lunch" },
  { emoji: "🧁", name: "Dessert" },
  { emoji: "🍹", name: "Drinks" },
  { emoji: "🥘", name: "Dinner" },
  { emoji: "🍨", name: "Icecream" },
];

interface FoodCardItem {
  emoji: string;
  name: string;
}

const FoodCardList = () => {
  const renderFoodCardList = useCallback(({ item }: { item: FoodCardItem }) => {
    return <FoodCard emoji={item.emoji} name={item.name} />;
  }, []);
  // console.log("foodcardlist re-rendered");
  return (
    <View>
      <Text style={styles.heading}>What are you in the mood for ? ✨</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 8,
        }}
        data={data}
        keyExtractor={(item, index) => index.toString()} // Provide a unique key for each item
        renderItem={renderFoodCardList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "left",
    paddingLeft: 20,
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
});
export default FoodCardList;
