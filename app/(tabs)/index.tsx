// import React, { useEffect, useCallback } from "react";
// import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import { Stack, useFocusEffect } from "expo-router";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { Text, View } from "../../components/Themed";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { Feather } from "@expo/vector-icons";
// import SearchBox from "../../components/SearchBox";
// import FoodCardList from "../../components/FoodCardList";
// import RecommendationCardList from "../../components/RecommendationCardList";
// import AllRestaurantCardsList from "../../components/AllRestaurantCardsList";
// import { useAppSelector, useAppDispatch } from "../hooks";
// import { reset } from "../features/cart/CartSlice";

// export default function HomeScreen() {
//   const dispatch = useAppDispatch();
//   const cart = useAppSelector((state) => state.cart.cart);
//   useFocusEffect(
//     React.useCallback(() => {
//       dispatch(reset(cart));
//     }, [])
//   );
//   console.log(cart);
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
//       <ScrollView>
//         <Stack.Screen
//           options={{
//             header: (props) => (
//               <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
//                 <View style={styles.headerContainer}>
//                   <View style={styles.headerLeftContainer}>
//                     <Image
//                       style={styles.logo}
//                       source={require("../../assets/images/name.png")}
//                     />
//                   </View>
//                   <TouchableOpacity
//                     onPress={() => {
//                       // TODO: Msg Feature
//                     }}
//                     style={styles.messageIconContainer}
//                   >
//                     <Feather name="message-circle" size={30} color="#000" />
//                   </TouchableOpacity>
//                 </View>
//               </SafeAreaView>
//             ),
//             headerShadowVisible: false,
//             headerTitle: "", // Remove the header title to make space
//           }}
//         />
//         {/* Move the SearchBox component below the header */}
//         <View style={styles.SearchBoxContainer}>
//           <SearchBox />
//         </View>
//         <FoodCardList />
//         <RecommendationCardList />
//         <AllRestaurantCardsList />
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
import React, { useEffect } from "react";
import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Stack, useFocusEffect } from "expo-router";
import { Text, View } from "../../components/Themed";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import SearchBox from "../../components/SearchBox";
import FoodCardList from "../../components/FoodCardList";
import RecommendationCardList from "../../components/RecommendationCardList";
import AllRestaurantCardsList from "../../components/AllRestaurantCardsList";
import ContainerSeparator from "../../components/ContainerSeparator";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { cartState } from "../state/atoms/cartState";

export default function HomeScreen() {
  // const setCart = useSetRecoilState(cartState);
  const resetCart = useResetRecoilState(cartState);
  useFocusEffect(
    resetCart
    // React.useCallback(() => {
    //   setCart([]);
    // }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView stickyHeaderIndices={[4]}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/name.png")}
          />
          <TouchableOpacity
            onPress={() => {
              // TODO: Msg Feature
            }}
            style={styles.messageIconContainer}
          >
            <Feather name="message-circle" size={30} color="lightgray" />
          </TouchableOpacity>
        </View>
        <View style={styles.SearchBoxContainer}>
          <SearchBox placeholder="Search Restaurant, Food" />
        </View>

        <FoodCardList />
        <RecommendationCardList layoutHorizontal={true} />
        <View>
          <ContainerSeparator />
          <View style={styles.header}>
            <Text style={styles.heading}>All Restaurants</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>Sort by: distance</Text>
            </TouchableOpacity>
          </View>
          <ContainerSeparator />
        </View>

        <AllRestaurantCardsList />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    // paddingTop: 10,
    height: 60,
  },
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    resizeMode: "center",
    width: 180,
    height: 50,
  },
  messageIconContainer: {
    marginLeft: 20,
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  headerBar: {
    alignContent: "flex-end",
  },
  msgBox: {
    marginTop: 56,
    marginRight: 3,
  },
  msgIcon: {
    width: 100, // Adjust the width as needed
    height: 50,
  },
  messageIcon: {
    width: 25, // Adjust the width as needed
    height: 25, // Adjust the height as needed
  },
  SearchBoxContainer: {
    paddingTop: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 10,
    paddingBottom: 14,
    paddingTop: 14,
  },
  heading: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  seeAll: {
    marginRight: 10,
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
});
