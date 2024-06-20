import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const GiftCard = ({
  isCardOpened,
  imageSource,
  heading,
  text,
}: {
  isCardOpened: boolean;
  imageSource: any;
  heading: string;
  text: string;
}) => {
  return (
    <View
      style={[
        styles.card,
        isCardOpened ? styles.openedCard : styles.closedCard,
      ]}
    >
      {isCardOpened ? (
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.text}>{text}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.giftContainer}>
          <Text style={styles.gift}>🎁</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    borderRadius: 10,
    width: "80%",
    height: "90%",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  openedCard: {
    backgroundColor: "#e0e0e0",
  },
  closedCard: {
    backgroundColor: "#fff",
  },
  content: {
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "60%",
  },
  textContainer: {
    flex: 2,
    justifyContent: "center",
    paddingLeft: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  giftContainer: {
    flex: 1,
  },
  gift: {
    fontSize: 60,
  },
});

export default React.memo(GiftCard);
