import React, { useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import RecommendationCard from "./RecommendationCard";
import { FlatList, Pressable } from "react-native";
import { Link, useRouter } from "expo-router";

interface recommendedRestaurant {
  id: number;
  imageSource: any;
  name: string;
  open_timing: string;
  close_timing: string;
  description: string;
  foodName: string;
  emoji: string;
}

const recommendationData = [
  {
    id: 1,
    imageSource: require("../assets/images/restaurant1.jpg"),
    name: "Punjabi Tadka Restaurant",
    open_timing: "2PM",
    close_timing: "9PM",
    description: "20% off on every purchase",
    foodName: "Burger",
    emoji: "🍔",
  },
  {
    id: 2,
    imageSource: require("../assets/images/restaurant2.jpg"),
    name: "Gola Wala Icecream Parlour",
    open_timing: "8AM",
    close_timing: "9PM",
    description: "50% off on Desserts",
    foodName: "Cake",
    emoji: "🍰",
  },
  // Add more recommendation items as needed
];

const RecommendationCardList = ({
  layoutHorizontal,
}: {
  layoutHorizontal: boolean;
}) => {
  const router = useRouter();
  // Sample data for recommendation cards
  const renderRecommendationCard = useCallback(
    ({ item }: { item: recommendedRestaurant }) => {
      return (
        // <Link
        //   href={{
        //     pathname: "/restaurants/[restaurantId]",
        //     params: { restaurantId: item.id, restaurantName: item.name },
        //   }}
        //   asChild
        // >
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/restaurants/[restaurantId]",
              params: { restaurantId: item.id, restaurantName: item.name },
            })
          }
        >
          <RecommendationCard
            imageSource={item.imageSource}
            name={item.name}
            open_timing={item.open_timing}
            close_timing={item.close_timing}
            description={item.description}
            foodName={item.foodName}
            emoji={item.emoji}
          />
        </Pressable>

        // </Link>
      );
    },
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Recommended for you 💖</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      {layoutHorizontal ? (
        <FlatList
          data={recommendationData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecommendationCard}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <FlatList
          data={recommendationData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderRecommendationCard}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 10,
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

export default RecommendationCardList;
