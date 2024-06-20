import React, { useCallback } from "react";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Animated,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  useWindowDimensions,
  FlatList,
} from "react-native";
import {
  TabBar,
  TabView,
  SceneMap,
  SceneRendererProps,
  NavigationState,
} from "react-native-tab-view";
import dummyData from "../../constants/dummyDataProfile";
import transactionDummyData from "../../constants/transactionDummyData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ContainerSeparator from "../../components/ContainerSeparator";
import { Ionicons } from "@expo/vector-icons";
import RecommendationCardList from "../../components/RecommendationCardList";
import TransactionCard from "../../components/TransactionCard";
import { transaction } from "../../components/TransactionCard";
import FriendList from "../features/friends/friendsList";
import { router } from "expo-router";

interface ProfileScreenProps {
  imageSource: any;
  username: string;
  numberOfFriends: number;
  bio: string;
}

type Route = {
  key: string;
  title: string;
};
type State = NavigationState<Route>;

const FirstRoute = () => <View style={{ flex: 1 }}></View>;

const renderTransaction = ({ item }: { item: transaction }) => (
  <TransactionCard
    transactionId={item.transactionId}
    senderName={item.senderName}
    receiverName={item.receiverName}
    productName={item.productName}
    restaurantName={item.restaurantName}
    productEmoji={item.productEmoji}
    senderImage={item.senderImage}
    senderId={item.senderId}
    receiverId={item.receiverId}
    restaurantId={item.restaurantId}
  />
);

const SecondRoute = () => (
  <View style={{ flex: 1 }}>
    <FlatList
      contentContainerStyle={{ paddingBottom: 60 }}
      data={transactionDummyData}
      renderItem={renderTransaction}
    />
  </View>
);

const renderScene = SceneMap({
  myOrders: FirstRoute,
  fooGifts: SecondRoute,
});
export default function ProfileScreen(props: ProfileScreenProps) {
  const { username, imageSource, numberOfFriends, bio } = dummyData[0];
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "myOrders", title: "My Orders" },
    { key: "fooGifts", title: "FooGifts" },
  ]);

  const renderItem =
    ({
      navigationState,
      position,
    }: {
      navigationState: State;
      position: Animated.AnimatedInterpolation<number>;
    }) =>
    ({ route, index }: { route: Route; index: number }) => {
      const inputRange = navigationState.routes.map((_, i) => i);

      const activeOpacity = position.interpolate({
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 1 : 0)),
      });
      const inactiveOpacity = position.interpolate({
        inputRange,
        outputRange: inputRange.map((i: number) => (i === index ? 0 : 1)),
      });

      return (
        <View style={styles.tab}>
          <Animated.View style={[styles.item, { opacity: inactiveOpacity }]}>
            <Text style={[styles.label, styles.inactive]}>{route.title}</Text>
          </Animated.View>
          <Animated.View
            style={[styles.item, styles.activeItem, { opacity: activeOpacity }]}
          >
            <Text style={[styles.label, styles.active]}>{route.title}</Text>
          </Animated.View>
        </View>
      );
    };

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: State }
  ) => (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route: Route, index: number) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}
          >
            {renderItem(props)({ route, index })}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 3, backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.name}>{username}</Text>
        <Text style={styles.bio}>{bio}</Text>
        <View style={styles.friendsContainer}>
          <Pressable style={styles.button}>
            <MaterialCommunityIcons
              name="account-edit"
              color="white"
              size={24}
            />
            <Text style={styles.buttonText}> Edit Profile</Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/features/friends/friendsList")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{numberOfFriends} friends</Text>
          </Pressable>
        </View>
      </View>
      <ContainerSeparator />
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        style={styles.bigContainer}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      {/* <View style={styles.bigContainer}></View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    padding: 8,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    alignSelf: "center",
    padding: 5,
    width: 80,
    height: 80,
    borderRadius: 50,
    resizeMode: "contain",
  },
  bio: {
    padding: 7,
    fontSize: 16,
    fontWeight: "400",
  },
  friendsContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 8,
    paddingHorizontal: 10,
  },
  button: {
    width: 170,
    borderColor: "white",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "hotpink",
    flexDirection: "row",
    alignItem: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowColor: "deeppink",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  bigContainer: {
    flex: 1.8,
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  tabbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 3,
    margin: 10,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    padding: 4.5,
    width: 160,
  },
  activeItem: {
    position: "absolute",
    borderBottomWidth: 3,
    borderBottomColor: "hotpink",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  active: {
    color: "hotpink",
    fontWeight: "bold",
  },
  inactive: {
    color: "gray",
  },
  icon: {
    height: 26,
    width: 26,
  },
  label: {
    fontSize: 16,
    marginTop: 2,
    marginBottom: 1.5,
    backgroundColor: "transparent",
  },
});
