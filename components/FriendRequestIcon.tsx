import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const FriendRequestIcon = ({
  numberOfFriendRequests,
}: {
  numberOfFriendRequests: number;
}) => {
  return (
    <View>
      {numberOfFriendRequests > 0 ? (
        <View style={styles.iconContainer}>
          <MaterialIcons name="group-add" size={31} color="deepskyblue" />
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{numberOfFriendRequests}</Text>
          </View>
        </View>
      ) : (
        <MaterialIcons name="group-add" size={31} color="deepskyblue" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // margin: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countContainer: {
    backgroundColor: "red",
    borderRadius: 10,
    marginLeft: -15,
    marginTop: -15,
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
  },
  countText: {
    color: "white",
    fontSize: 12,
  },
});

export default FriendRequestIcon;
