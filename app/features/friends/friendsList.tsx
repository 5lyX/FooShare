import React, { useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import ProfileCard, { user } from "../../../components/ProfileCard";
import BackButton from "../../../components/BackButton";
import SearchBox from "../../../components/SearchBox";
import { ScrollView } from "react-native-gesture-handler";
import ContainerSeparator from "../../../components/ContainerSeparator";
import FriendRequestIcon from "../../../components/FriendRequestIcon";

const dummyData = [
  {
    userId: 1,
    username: "John Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp1.png"),
  },
  {
    userId: 2,
    username: "Jane Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp2.png"),
  },
  {
    userId: 3,
    username: "John Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp1.png"),
  },
  {
    userId: 4,
    username: "Jane Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp2.png"),
  },
  {
    userId: 11,
    username: "John Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp1.png"),
  },
  {
    userId: 5,
    username: "Jane Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp2.png"),
  },
  {
    userId: 6,
    username: "John Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp1.png"),
  },
  {
    userId: 7,
    username: "Jane Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp2.png"),
  },
  {
    userId: 16,
    username: "John Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp1.png"),
  },
  {
    userId: 17,
    username: "Jane Doe",
    firstName: "John",
    timing: "19m",
    profileImage: require("../../../assets/images/pfp2.png"),
  },
  // Add more dummy data as needed
];

const FriendList = ({
  numberOfFriendRequests,
}: {
  numberOfFriendRequests: number;
}) => {
  const renderProfileCard = useCallback(({ item }: { item: user }) => {
    return (
      <ProfileCard
        userId={item.userId}
        username={item.username}
        profileImage={item.profileImage}
        timing={item.timing}
        firstName={item.firstName}
      />
    );
  }, []);
  const { height, width, scale, fontScale } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: height * 0.06 }}></View>
      <BackButton color="black" />
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>My Friends</Text>
        <Text style={{ fontSize: 24 }}> 🌟</Text>
        <View style={styles.requestIcon}>
          <FriendRequestIcon numberOfFriendRequests={numberOfFriendRequests} />
        </View>
      </View>
      <SearchBox placeholder="Search for friends" />
      <View style={styles.childContainer}>
        <ContainerSeparator />
        <FlatList
          data={dummyData}
          keyExtractor={(item) => item.userId.toString()}
          renderItem={renderProfileCard}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  headingContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  heading: {
    textDecorationLine: "underline",
    fontSize: 24,
    fontWeight: "bold",
    // marginBottom: 20,
  },
  childContainer: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 20,
    // paddingVertical: 10,
    backgroundColor: "white",
    // gap: 10,
    width: "100%",
    // alignItems: "flex-start",
    // justifyContent: "center",
    // flexDirection: "column",
  },
  requestIcon: {
    right: "-130%",
  },
});

export default FriendList;
