import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useCallback } from "react";
import ContainerSeparator from "./ContainerSeparator";

const MenuList = ({ categories }: { categories: string[] }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Your Favorites");

  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category); // Set the selected category
  };

  const renderMenuItem = useCallback(
    ({ item }: { item: string }) => {
      return (
        <TouchableOpacity
          style={[styles.menuItem]}
          onPress={() => handleCategorySelect(item)}
        >
          <Text
            style={[
              styles.menuText,
              {
                color: selectedCategory === item ? "hotpink" : "gray",
              },
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      );
    },
    [handleCategorySelect]
  );
  // console.log("menulist re-rendered");
  return (
    <>
      <ContainerSeparator />
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={handleSearchBar}>
          <FontAwesome
            style={[
              styles.searchIcon,
              { color: showSearchBar ? "hotpink" : "gray" },
            ]}
            size={20}
            name="search"
          />
        </TouchableOpacity>

        {showSearchBar ? (
          <TextInput
            style={styles.searchBar}
            placeholder="Search in restaurant..."
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />
        ) : (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{
              marginTop: -2,
            }}
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMenuItem}
          />
        )}
      </View>
      <ContainerSeparator />
    </>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    marginTop: 12,
    height: 30,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  menuItem: {
    marginHorizontal: 10,
  },
  menuText: {
    fontWeight: "bold",
    color: "gray",
  },
  searchIcon: {
    marginTop: -3,
    paddingLeft: 10,
    paddingRight: 5,
  },
  searchBar: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: "gray",
    marginTop: -12,
    fontSize: 16,
    width: 120,
  },
});

export default MenuList;
