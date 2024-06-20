import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantCard = ({
  name,
  distance,
  description,
  closingTime,
  imageSource,
}: {
  name: string;
  distance: string;
  description: string;
  closingTime: string;
  imageSource: any;
}) => {
  // console.log("Re-rendered : restaurant card");
  return (
    <View>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.distance}>{distance}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.closingTime}>Closing Time: {closingTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    marginVertical: 5,
    paddingLeft: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  image: {
    width: 140,
    height: 110,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    padding: 10,
    paddingLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  distance: {
    fontSize: 14,
    color: "#888",
  },
  description: {
    fontSize: 12,
    color: "hotpink",
    fontWeight: "bold",
  },
  closingTime: {
    fontSize: 14,
    color: "#888",
  },
});

export default React.memo(RestaurantCard);
