// import React, { useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
// interface FoodItem {
//   id: number;
//   name: string;
//   price: number;
//   imageSource: any;
// }

// const FoodOrderCard = React.memo(
//   ({
//     food,
//     incrementQuantity,
//     decrementQuantity,
//     addToCart,
//   }: {
//     food: FoodItem;
//     incrementQuantity: ActionCreatorWithPayload<any, "cart/incrementQuantity">;
//     decrementQuantity: ActionCreatorWithPayload<any, "cart/decrementQuantity">;
//     addToCart: ActionCreatorWithPayload<any, "cart/addToCart">;
//   }) => {
//     const { id, name, price, imageSource } = food;
//     const cart = useAppSelector((state) => state.cart.cart);
//     const dispatch = useAppDispatch();
//     // const [quantity, setQuantity] = useState(0);
//     const [quantity, setQuantity] = useState(() => {
//       const cartItem = cart.find((item) => item.id === id);
//       return cartItem ? cartItem.quantity : 0;
//     });
//     const handleIncrement = (item: FoodItem) => {
//       setQuantity(quantity + 1);
//       if (!quantity) {
//         dispatch(addToCart(item));
//       } else {
//         dispatch(incrementQuantity(item));
//       }
//     };

//     const handleDecrement = (item: FoodItem) => {
//       if (quantity > 0) {
//         setQuantity(quantity - 1);
//         dispatch(decrementQuantity(item));
//       }
//     };

//     // console.log(cart);
//     return (
//       <View style={styles.card}>
//         <Image source={imageSource} style={styles.image} />
//         <View style={styles.details}>
//           <Text style={styles.name}>{name}</Text>
//           <Text style={styles.price}>
//             {" "}
//             {"\u20B9"} {price}
//           </Text>
//         </View>
//         <View style={styles.counter}>
//           <TouchableOpacity onPress={() => handleDecrement(food)}>
//             <FontAwesome
//               name="minus-circle"
//               style={styles.counterTextDec}
//               size={20}
//             />
//           </TouchableOpacity>
//           <Text style={styles.quantity}>{quantity}</Text>
//           <TouchableOpacity onPress={() => handleIncrement(food)}>
//             <FontAwesome
//               name="plus-circle"
//               style={styles.counterTextInc}
//               size={25}
//             />
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// );

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 8,
//     // shadowColor: "#000",
//     // shadowOffset: {
//     //   width: 0,
//     //   height: 2,
//     // },
//     // shadowOpacity: 0.25,
//     // shadowRadius: 3.84,
//     // elevation: 5,
//   },
//   details: { alignSelf: "center", flex: 1, padding: 10 },
//   image: {
//     alignSelf: "center",
//     width: 110,
//     height: 60,
//     resizeMode: "cover",
//     borderRadius: 8,
//   },
//   name: {
//     // position: "absolute",
//     // top: 5,
//     // left: 115,
//     fontSize: 15,
//     fontWeight: "bold",
//     padding: 0,
//     marginLeft: 5,
//   },
//   price: {
//     // position: "absolute",
//     // top: 35,
//     // left: 115,
//     marginLeft: 5,
//     fontSize: 14,
//     fontWeight: "bold",
//     color: "gray",
//   },
//   counter: {
//     alignSelf: "center",
//     flexDirection: "row",
//     // position: "absolute",
//     // top: 15,
//     // right: 20,
//     alignItems: "center",
//     // marginTop: 10,
//   },
//   counterTextDec: {
//     paddingHorizontal: 10,
//     fontWeight: "bold",
//     color: "red",
//   },
//   counterTextInc: {
//     // fontSize: 25,
//     paddingHorizontal: 10,
//     fontWeight: "bold",
//     color: "mediumseagreen",
//   },
//   quantity: {
//     fontSize: 25,
//     fontWeight: "bold",
//   },
// });

// export default FoodOrderCard;

import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import BottomFoodDrawer from "./BottomFoodDrawer";
import { ItemInCart, cartState } from "../app/state/atoms/cartState";
import { useRecoilState } from "recoil";
import { useAddProduct, useRemoveProduct } from "../app/state/hooks/cartHooks";

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  imageSource: any;
  description: string;
}

const FoodOrderCard = ({ food }: { food: FoodItem }) => {
  // console.log("re-rendered food order card 1");
  const { id, name, price, imageSource } = food;
  const [cart, setCart] = useRecoilState(cartState);
  const addItemToCart = useAddProduct();
  const removeItemFromCart = useRemoveProduct();
  const router = useRouter();
  const [quantity, setQuantity] = useState(() => {
    const cartItem = cart.find((item) => item.id === id);
    return cartItem ? cartItem.quantity : 0;
  });
  // console.log(cart);
  const handleIncrement =
    // (quantity: number) => {
    //   // setQuantity((prevQuantity) => {
    //   //   if (!prevQuantity) {
    //   //     dispatch(addToCart(food));
    //   //   } else {
    //   //     dispatch(incrementQuantity(food));
    //   //   }
    //   //   return prevQuantity + 1;
    //   // });
    //   const prevQuantity = quantity;
    //   setQuantity(quantity + 1);
    //   if (!prevQuantity) {
    //     dispatch(addToCart(food));
    //   } else {
    //     dispatch(incrementQuantity(food));
    //   }
    (quantity: number) => {
      const prevQuantity = quantity;
      setQuantity(quantity + 1);
      addItemToCart(food);
      // const itemIndex = cart.findIndex((item) => item.id === food.id);
      // if (itemIndex !== -1) {
      //   setCart((prevCart: ItemInCart[]) => {
      //     const cartItem = cart[itemIndex];
      //     cartItem.quantity = cart[itemIndex].quantity + 1;
      //     return { ...cart, cartItem };
      //   });
      // } else {
      //   setCart((prevCart: ItemInCart[]) => [
      //     ...prevCart,
      //     {
      //       id: food.id,
      //       quantity: 1,
      //       imageSource: food.imageSource,
      //       price: food.price,
      //     },
      //   ]);
      // }
    };

  const handleDecrement = (quantity: number) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeItemFromCart(food);
    }
    // // console.log("handleDecrement called");
    // if (quantity > 0) {
    //   // setQuantity((prevQuantity) => {
    //   //   dispatch(decrementQuantity(food));
    //   //   return prevQuantity - 1;
    //   // });
    //   const prevQuantity = quantity;
    //   setQuantity(prevQuantity - 1);
    //   const itemInCart = cart.find((item) => item.id === food.id);
    //   const itemIndex = cart.findIndex((item) => item.id === food.id);
    //   if (itemInCart) {
    //     if (itemInCart.quantity === 1) {
    //       setCart((prevCart: ItemInCart[]) =>
    //         cart.filter((item) => item.id !== food.id)
    //       );
    //     } else {
    //       setCart((prevCart: ItemInCart[]) => {
    //         const cartItem = cart[itemIndex];
    //         cartItem.quantity = cart[itemIndex].quantity - 1;
    //         return { ...cart, cartItem };
    //       });
    //       itemInCart.quantity--;
    //     }
    //   }
    // }
  };
  const windowHeight = Dimensions.get("window").height;

  // This state would determine if the drawer sheet is visible or not
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  // // Function to open the bottom sheet
  // const handleOpenBottomSheet = () => {
  //   setIsBottomSheetOpen(true);
  // };

  // // Function to close the bottom sheet
  // const handleCloseBottomSheet = () => {
  //   setIsBottomSheetOpen(false);
  // };
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />

      <View style={styles.details}>
        {/* <Link
          href={{
            pathname: "/features/food/[foodId]",
            params: { foodId: id },
          }}
          asChild
        > */}
        <Pressable onPress={() => setIsBottomSheetOpen(!isBottomSheetOpen)}>
          <Text style={styles.name}>{name}</Text>
        </Pressable>
        <BottomFoodDrawer
          food={food}
          isBottomSheetOpen={isBottomSheetOpen}
          setIsBottomSheetOpen={setIsBottomSheetOpen}
        />
        {/* </Link> */}
        <Text style={styles.price}>
          {" "}
          {"\u20B9"} {price}
        </Text>
      </View>
      <View style={styles.counter}>
        <TouchableOpacity onPressIn={() => handleDecrement(quantity)}>
          <FontAwesome
            name="minus-circle"
            style={styles.counterTextDec}
            size={20}
          />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity onPressIn={() => handleIncrement(quantity)}>
          <FontAwesome
            name="plus-circle"
            style={styles.counterTextInc}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    alignContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  details: { alignSelf: "center", flex: 1, padding: 10 },
  image: {
    alignSelf: "center",
    width: 110,
    height: 60,
    resizeMode: "cover",
    borderRadius: 8,
  },
  name: {
    // position: "absolute",
    // top: 5,
    // left: 115,
    fontSize: 15,
    fontWeight: "bold",
    padding: 0,
    marginLeft: 5,
  },
  price: {
    // position: "absolute",
    // top: 35,
    // left: 115,
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "gray",
  },
  counter: {
    alignSelf: "center",
    flexDirection: "row",
    // position: "absolute",
    // top: 15,
    // right: 20,
    alignItems: "center",
    // marginTop: 10,
  },
  counterTextDec: {
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "red",
  },
  counterTextInc: {
    // fontSize: 25,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "mediumseagreen",
  },
  quantity: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

export const MemoizedFoodOrderCard = React.memo(FoodOrderCard);
