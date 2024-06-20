// FoodCard.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const FoodCard = ({ emoji, name }: { emoji: String; name: String }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  // console.log("foodcard re-rendered ");
  const borderGradientColors = isSelected
    ? ["#3678dd", "#3fdfe9", "#ed7cfc"]
    : ["transparent", "transparent", "transparent"]; // Apply gradient border if selected

  return (
    <TouchableOpacity onPress={toggleSelection}>
      <View style={[styles.card, { borderColor: "#fff" }]}>
        <LinearGradient
          colors={borderGradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientBorder}
        >
          <View
            style={{
              borderRadius: 60,
              flex: 1,
              backgroundColor: "#fff",
              justifyContent: "center",
            }}
          >
            <View style={styles.cardContent}>
              <Text style={styles.emoji}>{emoji}</Text>
              <Text
                style={[styles.name, isSelected ? { color: "#000" } : null]}
              >
                {name}
              </Text>
            </View>
          </View>
        </LinearGradient>
        {/* <LinearGradient
          colors={borderGradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientBorder}
        >
          
        </LinearGradient> */}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 85,
    height: 85,
    borderWidth: 1,
    borderRadius: 60,
    marginHorizontal: 2,
  },
  gradientBorder: {
    flex: 1,
    borderRadius: 60,
    padding: 3,
  },
  cardContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: 26,
    marginBottom: 5,
  },
  name: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default React.memo(FoodCard);
