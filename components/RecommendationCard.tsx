import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const RecommendationCard = ({
  imageSource,
  name,
  open_timing,
  close_timing,
  description,
  foodName,
  emoji,
}: {
  imageSource: any;
  name: string;
  open_timing: string;
  close_timing: string;
  description: string;
  foodName: string;
  emoji: string;
}) => {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={imageSource}
        style={[styles.card, styles.elevation]}
      >
        <View style={styles.overlay}>
          <Text style={styles.timing}>
            {open_timing}-{close_timing}
          </Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.foodName}>
              {emoji} {foodName}
            </Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 210,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  cardContainer: {
    marginTop: -3,
    padding: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
  },
  timing: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    backgroundColor: "#fff",
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 4,
    position: "absolute",
    top: 10,
    left: 10,
  },
  elevation: { elevation: 14, shadowColor: "#3678dd" },
  detailsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 12,
    color: "lightgreen",
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default RecommendationCard;
