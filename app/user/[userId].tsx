import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export interface UserScreenProps {
  userId: number;
  imageSource: any;
  userName: string;
  numFriends: number;
}

const UserScreen = (props: UserScreenProps) => {
  const { imageSource, userName, numFriends } = props;
  const local = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text>userScreen</Text>
      <Text>{local.userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    alignSelf: "center",
    padding: 5,
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});

export default UserScreen;
