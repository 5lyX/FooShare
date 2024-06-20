import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ModalDescription = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.text}>Burger $12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
  },
  text: {
    position: "absolute",
    top: 25,
    left: 25,
    color: "black",
    fontSize: 16,
  },
});

export default ModalDescription;
