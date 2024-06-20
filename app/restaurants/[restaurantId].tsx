// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
//   StyleSheet,
//   ImageBackground,
//   Pressable,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { useRouter } from "expo-router";
// import DiscountCardList from "../../components/DiscountCardList";
// import MenuList from "../../components/MenuList";
// import ContainerSeparator from "../../components/ContainerSeparator";
// import FoodOrderCardList from "../../components/FoodOrderCardList";
// import { useAppSelector, useAppDispatch } from "../hooks";
// import { reset } from "../features/cart/CartSlice";
// import { Stack } from "expo-router";
// import { useLocalSearchParams } from "expo-router";
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import DiscountCardList from "../../components/DiscountCardList";
import MenuList from "../../components/MenuList";
import ContainerSeparator from "../../components/ContainerSeparator";
import FoodOrderCardList from "../../components/FoodOrderCardList";
import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import BottomFoodDrawer from "../../components/BottomFoodDrawer";
import BackButton from "../../components/BackButton";
import { ScrollView } from "react-native-gesture-handler";
import { useRecoilValue, useRecoilState } from "recoil";
import { cartState } from "../state/atoms/cartState";
import { cartStatus } from "../state/selectors/cartSelector";

const ImageCardScreen = () => {
  const [liked, setLiked] = useState(false);
  const [cart, setCart] = useRecoilState(cartState);
  const router = useRouter();
  // const dispatch = useAppDispatch();
  // const cart = useAppSelector((state) => state.cart.cart);
  const { restaurantId, restaurantName } = useLocalSearchParams();
  const cartDetails = useRecoilValue(cartStatus);
  // const totalQuantity = useMemo(() => {
  //   return (cart || []).reduce(
  //     (accumulator, item) => accumulator + item.quantity,
  //     0
  //   );
  // }, [cart]);

  // const totalPrice = useMemo(() => {
  //   return (cart || []).reduce(
  //     (accumulator, item) => accumulator + item.price * item.quantity,
  //     0
  //   );
  // }, [cart]);
  console.log(cart);
  const categories = useMemo(() => {
    return [
      "Your Favorites",
      "Pastries",
      "Bagels",
      "Breakfast",
      "Dinner",
      "Icecream",
    ];
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/restaurant1.jpg")}
        style={styles.imageBackground}
      >
        <BackButton color="white" />
        <TouchableOpacity
          style={styles.likeButton}
          onPress={() => setLiked(!liked)}
        >
          {liked ? (
            <FontAwesome size={25} name="heart" color="red" />
          ) : (
            <FontAwesome size={25} name="heart-o" color="white" />
          )}
        </TouchableOpacity>
        <Text style={styles.text}>{restaurantName}</Text>
      </ImageBackground>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={styles.discountList}>
          <DiscountCardList />
        </View>
        <View style={styles.menuList}>
          <MenuList categories={categories} />
        </View>
        <View style={styles.FoodOrderCardList}>
          <FoodOrderCardList />
        </View>
      </ScrollView>
      {cart.length ? (
        <TouchableOpacity>
          <View style={styles.bottomButtonContainer}>
            <View style={styles.bottomButton}>
              <View style={styles.bottomSmallTextContainer}>
                <Text style={styles.bottomSmallText}>{restaurantName}</Text>
                <Text style={styles.bottomItemCount}>
                  {cartDetails.totalQuantity} items
                </Text>
              </View>
              <View style={styles.bottomLargeTextContainer}>
                <Text style={styles.bottomLargeText}>View Cart</Text>
                <Text style={styles.bottomTotal}>
                  {"\u20B9"} {cartDetails.totalPrice}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ) : null}
    </SafeAreaView>
  );
};

// const ImageCardScreen = () => {
//   const [liked, setLiked] = useState(false);
//   const router = useRouter();
//   const dispatch = useAppDispatch();
//   const cart = useAppSelector((state) => state.cart.cart);
//   const { restaurantId, restaurantName } = useLocalSearchParams();

//   const totalQuantity = cart.reduce((accumulator, item) => {
//     return accumulator + item.quantity;
//   }, 0);

//   const totalPrice = cart.reduce((accumulator, item) => {
//     return accumulator + item.price * item.quantity;
//   }, 0);

//   const categories = [
//     "Your Favorites",
//     "Pastries",
//     "Bagels",
//     "BreakFast",
//     "Dinner",
//     "Icecream",
//   ];

//   // console.log(cart);
//   return (
//     <SafeAreaView style={styles.container}>
//       <Stack.Screen
//         options={{
//           headerShown: false,
//           headerShadowVisible: false,
//         }}
//       />
//       <ImageBackground
//         source={require("../../assets/images/restaurant1.jpg")}
//         style={styles.imageBackground}
//       >
//         <Pressable onPress={() => router.back()} style={styles.backButton}>
//           <FontAwesome size={22} name="chevron-left" color="white" />
//         </Pressable>
//         <TouchableOpacity
//           style={styles.likeButton}
//           onPress={() => setLiked(!liked)}
//         >
//           {liked ? (
//             <FontAwesome size={25} name="heart" color="red" />
//           ) : (
//             <FontAwesome size={25} name="heart-o" color="white" />
//           )}
//         </TouchableOpacity>
//         <Text style={styles.text}>{restaurantName}</Text>
//       </ImageBackground>

//       <View style={styles.discountList}>
//         <DiscountCardList />
//       </View>
//       <ContainerSeparator />
//       <View style={styles.menuList}>
//         <MenuList categories={categories} />
//       </View>
//       <ContainerSeparator />
//       <View style={styles.FoodOrderCardList}>
//         <FoodOrderCardList />
//       </View>
//       {cart.length ? (
//         <TouchableOpacity>
//           <View style={styles.bottomButtonContainer}>
//             <View style={styles.bottomButton}>
//               <View style={styles.bottomSmallTextConatiner}>
//                 <Text style={styles.bottomSmallText}>{restaurantName}</Text>
//                 <Text style={styles.bottomItemCount}>
//                   {totalQuantity} items
//                 </Text>
//               </View>
//               <View style={styles.bottomLargeTextConatiner}>
//                 <Text style={styles.bottomLargeText}>View Cart</Text>
//                 <Text style={styles.bottomTotal}>
//                   {" "}
//                   {"\u20B9"} {totalPrice}
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </TouchableOpacity>
//       ) : null}
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  imageBackground: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  likeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "transparent",
    padding: 10,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "transparent",
    padding: 10,
  },
  text: {
    padding: 5,
    position: "absolute",
    bottom: 0,
    left: 0,
    fontSize: 25,
    color: "white",
    marginLeft: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  discountList: {
    marginTop: 5,
  },
  menuList: {
    marginTop: 10,
    backgroundColor: "white",
    zIndex: 1,
    position: "sticky",
    top: 0,
  },
  bottomButtonContainer: {
    flex: 1,
    position: "absolute",
    width: "90%",
    bottom: 10,
    alignSelf: "center",
    // alignItems: "center",
    zIndex: 33,
  },
  bottomButton: {
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 65,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "hotpink",
    shadowColor: "hotpink",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  bottomSmallTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -4,
  },
  bottomSmallText: {
    right: 0,
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
  },
  bottomItemCount: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
  },
  bottomLargeTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  bottomTotal: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  bottomLargeText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  FoodOrderCardList: {
    flex: 1,
  },
});

export default ImageCardScreen;
