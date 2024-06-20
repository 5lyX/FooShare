import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const DiscountCard = React.memo(
  ({
    deal,
    description,
    imageSource,
  }: {
    deal: string;
    description: string;
    imageSource: any;
  }) => {
    // console.log("re-rendered discount card");
    return (
      <View>
        <View style={styles.card}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.deal}>{deal}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    height: 110,
    width: 150,
    flexDirection: "row",
    backgroundColor: "ivory",
    borderRadius: 10,
    margin: 10,
    marginVertical: 5,
    marginHorizontal: 5,
    paddingLeft: 8,
    borderBottomColor: "black",
    // shadowColor: "black",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 4,
    // elevation: 10,
  },
  image: {
    width: 60,
    height: 95,
    marginVertical: 8,
    // borderTopLeftRadius: 10,
    // borderBottomLeftRadius: 10,
    borderRadius: 15,
  },
  details: {
    flex: 1,
    padding: 10,
  },
  deal: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
  description: {
    fontSize: 12,
    padding: 4,
    color: "gray",
    fontWeight: "800",
  },
});
export default DiscountCard;
