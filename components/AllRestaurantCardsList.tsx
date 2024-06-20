import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import RestaurantCard from "./RestaurantCard";
import { Link, useRouter } from "expo-router";

interface Restaurant {
  id: number;
  name: string;
  distance: string;
  description: string;
  closingTime: string;
  imageSource: any;
}

const restaurantData = [
  {
    id: 1,
    name: "Restaurant A",
    distance: "1.5 miles",
    description: "20% off on Burgers",
    closingTime: "10:00 PM",
    imageSource: require("../assets/images/restaurant1.jpg"),
  },
  {
    id: 2,
    name: "Restaurant B",
    distance: "2 miles",
    description: "Delicious meals for all food lovers",
    closingTime: "9:30 PM",
    imageSource: require("../assets/images/restaurant2.jpg"),
  },
  {
    id: 3,
    name: "Restaurant C",
    distance: "1.5 miles",
    description: "20% off on Burgers",
    closingTime: "10:00 PM",
    imageSource: require("../assets/images/restaurant1.jpg"),
  },
  {
    id: 4,
    name: "Restaurant D",
    distance: "2 miles",
    description: "Delicious meals for all food lovers",
    closingTime: "9:30 PM",
    imageSource: require("../assets/images/restaurant2.jpg"),
  },
  {
    id: 5,
    name: "Restaurant B",
    distance: "2 miles",
    description: "Delicious meals for all food lovers",
    closingTime: "9:30 PM",
    imageSource: require("../assets/images/restaurant2.jpg"),
  },
  {
    id: 6,
    name: "Restaurant C",
    distance: "1.5 miles",
    description: "20% off on Burgers",
    closingTime: "10:00 PM",
    imageSource: require("../assets/images/restaurant1.jpg"),
  },
  {
    id: 7,
    name: "Restaurant D",
    distance: "2 miles",
    description: "Delicious meals for all food lovers",
    closingTime: "9:30 PM",
    imageSource: require("../assets/images/restaurant2.jpg"),
  },
  // Add more restaurant items as needed
];
// console.log("Re-rendered : all restaurant card list");
const AllRestaurantCardsList = () => {
  const router = useRouter();
  const renderRestaurantCardList = useCallback(
    ({ item }: { item: Restaurant }) => {
      return (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/restaurants/[restaurantId]",
              params: { restaurantId: item.id, restaurantName: item.name },
            })
          }
        >
          <RestaurantCard
            name={item.name}
            distance={item.distance}
            description={item.description}
            closingTime={item.closingTime}
            imageSource={item.imageSource}
          />
        </TouchableOpacity>
      );
    },
    []
  );
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.heading}>All Restaurants</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>Sort by: distance</Text>
        </TouchableOpacity>
      </View> */}
      <FlatList
        contentContainerStyle={{ paddingBottom: 50 }}
        data={restaurantData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderRestaurantCardList}
      />
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
    paddingBottom: 10,
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
export default AllRestaurantCardsList;
