import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
interface BackButtonProps {
  color: string;
}
const BackButton = (props: BackButtonProps) => {
  const { color } = props;
  const router = useRouter();
  return (
    <Pressable onPress={() => router.back()} style={styles.backButton}>
      <FontAwesome size={22} name="chevron-left" color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "transparent",
    padding: 10,
  },
});
export default BackButton;
