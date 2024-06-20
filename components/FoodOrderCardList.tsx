import React, { memo, useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  SectionList,
  Pressable,
} from "react-native";
import { MemoizedFoodOrderCard } from "./FoodOrderCard";
import ContainerSeparator from "./ContainerSeparator";
import { Link } from "expo-router";
import { FoodItem } from "./FoodOrderCard";

const dummyFoodData = [
  {
    id: 1,
    category: "Your Favorites",
    data: [
      {
        id: 1,
        imageSource: require("../assets/images/restaurant2.jpg"),
        description:
          "Indulge in a symphony of flavors with a sizzling, juicy patty embraced by melted cheddar, caramelized onions, and a tantalizing blend of smoky barbecue sauce and creamy garlic aioli, all nestled between perfectly toasted sesame seed buns.",
        name: "Burger",
        price: 8.99,
      },
      {
        id: 2,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Pizza",
        price: 10.49,
        description:
          "Experience the buttery, flaky goodness of this traditional French pastry, perfect for any time of day.",
      },
      {
        id: 3,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Spaghetti",
        price: 9.99,
        description:
          "Experience the buttery, flaky goodness of this traditional French pastry, perfect for any time of day.",
      },
    ],
  },
  {
    id: 2,
    category: "Pastries",
    data: [
      {
        id: 4,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Croissant",
        price: 2.99,
        description:
          "Experience the buttery, flaky goodness of this traditional French pastry, perfect for any time of day.",
      },
      {
        id: 5,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Danish Pastry",
        price: 3.49,
        description:
          "Delicate layers of pastry envelop a delectable filling, creating a delightful treat with a hint of sweetness in every bite.",
      },
      {
        id: 6,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Eclair",
        price: 2.79,
        description:
          "A luscious French pastry filled with creamy custard and topped with a lustrous glaze, offering a moment of pure indulgence.",
      },
    ],
  },
  {
    id: 3,
    category: "Bagels",
    data: [
      {
        id: 7,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Plain Bagel",
        price: 1.99,
        description:
          "Enjoy the simplicity of a freshly baked bagel, boasting a satisfying chewy texture and a subtle hint of sweetness.",
      },
      {
        id: 8,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Everything Bagel",
        price: 2.49,
        description:
          "Revel in the delightful medley of flavors with this savory bagel adorned with a harmonious blend of toppings.",
      },
      {
        id: 9,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Blueberry Bagel",
        price: 2.29,
        description:
          "Savor the fusion of soft, doughy goodness with bursts of sweet, juicy blueberries, encapsulating a delightful breakfast experience.",
      },
    ],
  },
  {
    id: 4,
    category: "Breakfast",
    data: [
      {
        id: 10,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Pancakes",
        price: 5.99,
        description:
          "Dive into a stack of fluffy, golden pancakes, drizzled with maple syrup and crowned with a pat of melting butter.",
      },
      {
        id: 11,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Omelette",
        price: 7.49,
        description:
          "Delight in a light and fluffy omelette, generously filled with an array of savory ingredients, promising a wholesome breakfast experience.",
      },
      {
        id: 12,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "French Toast",
        price: 6.29,
        description:
          "Indulge in thick slices of bread, soaked in a luscious egg mixture and griddled to golden perfection, offering a delightful breakfast treat.",
      },
    ],
  },
  {
    id: 5,
    category: "Dinner",
    data: [
      {
        id: 13,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Steak",
        price: 15.99,
        description:
          "Unleash your carnivorous cravings with a succulent, perfectly seared steak, bursting with robust, savory flavors.",
      },
      {
        id: 14,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Salmon",
        price: 13.49,
        description:
          "Delight in a dish of perfectly grilled salmon, exuding a delicate balance of rich, buttery texture and fresh, oceanic flavors.",
      },
      {
        id: 15,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Chicken Alfredo",
        price: 11.99,
        description:
          "Dive into a plate of creamy, velvety pasta adorned with tender pieces of succulent chicken, offering a harmonious blend of flavors and textures.",
      },
    ],
  },
  {
    id: 6,
    category: "Ice Cream",
    data: [
      {
        id: 16,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Vanilla Ice Cream",
        price: 3.99,
        description:
          "Delight in the smooth, delicate sweetness of classic vanilla, offering a timeless dessert experience.",
      },
      {
        id: 17,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Chocolate Chip Ice Cream",
        price: 4.49,
        description:
          "Indulge in the rich creaminess of chocolate ice cream generously studded with delectable chocolate chips, creating a heavenly treat for any chocolate lover.",
      },
      {
        id: 18,
        imageSource: require("../assets/images/restaurant2.jpg"),
        name: "Strawberry Ice Cream",
        price: 4.29,
        description:
          "Experience the refreshing burst of fruity sweetness in every spoonful, as luscious strawberry swirls entwine with smooth, creamy ice cream, creating a delightful dessert sensation.",
      },
    ],
  },
];

// const FoodOrderCardList = () => {
//   const renderFoodOrderCard = useCallback(({ item }: { item: FoodItem }) => {
//     return (
//       <FoodOrderCard
//         food={item}
//         incrementQuantity={incrementQuantity}
//         decrementQuantity={decrementQuantity}
//         addToCart={addToCart}
//       />
//     );
//   }, []);
//   return (
//     <SafeAreaView>
//       <FlatList
//         contentContainerStyle={{ paddingBottom: 80 }}
//         data={dummyFoodData}
//         renderItem={({ item }: { item: FoodCategory }) => (
//           <SafeAreaView>
//             <Text style={styles.menuCategory}>{item.category}</Text>
//             <FlatList
//               data={item.data}
//               renderItem={renderFoodOrderCard}
//               keyExtractor={(foodItem) => foodItem.name}
//             />
//           </SafeAreaView>
//         )}
//         keyExtractor={(item) => item.category}
//       />
//     </SafeAreaView>
//   );
// };
const FoodOrderCardList = () => {
  // console.log("re-rendered food order card list 1");
  const renderFoodOrderCard = useCallback(({ item }: { item: FoodItem }) => {
    return <MemoizedFoodOrderCard food={item} />;
  }, []);
  return (
    <SectionList
      contentContainerStyle={{ paddingBottom: 80 }}
      sections={dummyFoodData}
      keyExtractor={(item) => item.id.toString()}
      renderSectionHeader={({ section }) => (
        <Text style={styles.menuCategory}>{section.category}</Text>
      )}
      renderItem={renderFoodOrderCard}
    />
  );
};
const styles = StyleSheet.create({
  menuCategory: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
  },
});
export default FoodOrderCardList;
