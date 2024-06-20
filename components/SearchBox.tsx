import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBox = ({ placeholder }: { placeholder: string }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const borderColor = isFocused ? "grey" : "lightgray";

  return (
    <View style={[styles.container, { borderColor: borderColor }]}>
      <FontAwesome name="search" size={24} color="hotpink" />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="gray"
        onFocus={handleFocus}
        onBlur={handleBlur}
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 5, // Adjust the padding values
    paddingHorizontal: 10, // Adjust the padding values
    borderRadius: 20,
    marginHorizontal: 20, // Adjust the margin values
    borderWidth: 1,
    shadowColor: "gray",
    shadowRadius: 3.49,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});

export default React.memo(SearchBox);
