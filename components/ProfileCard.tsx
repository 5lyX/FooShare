import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

export type user = {
  userId: number;
  username: string;
  firstName: string;
  timing: string;
  profileImage: any;
};
const ProfileCard = (user: user) => {
  const { userId, username, profileImage, firstName, timing } = user;
  return (
    <View style={styles.card}>
      <View style={styles.firstContainer}>
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.senderImage} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            onPress={() =>
              router.push({
                pathname: "/user/[userId]",
                params: { userId: userId },
              })
            }
            style={styles.username}
          >{`${username}`}</Text>
          <Text style={{ color: "hotpink" }}>{`${firstName}, ${timing}`}</Text>
        </View>
      </View>
      <Pressable>
        <FontAwesome5
          name="paper-plane"
          size={24}
          color="deepskyblue"
          style={styles.sendEmoji}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    // shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  imageContainer: {
    marginRight: 10,
  },
  senderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  firstContainer: {
    flexDirection: "row",
    padding: 10,
    width: "90%",
    alignItems: "center",
  },
  username: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  sendEmoji: {
    left: "-10%",
  },
});

export default ProfileCard;
