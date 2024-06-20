import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, SplashScreen, Tabs } from "expo-router";
import { hide } from "expo-splash-screen";
import { Pressable, useColorScheme, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return (

//   );
// }
const gradientColors = ["#3678dd", "#3fdfe9", "#ed7cfc"];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarVisibilityAnimationConfig: {
          hide: {
            animation: "timing",
          },
        },

        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
          paddingVertical: 4,
          position: "absolute",
          height: 60,
          width: "auto",
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["transparent", "#FFFFFF76", "white"]}
            start={{ x: 0, y: 0.2 }}
            end={{ x: 0, y: 0.4 }}
            style={{ flex: 1 }}
          />
        ),
        headerShown: false,
        tabBarHideOnKeyboard: true,
        // tabBarActiveTintColor: "#ed7cfc",
        tabBarActiveTintColor: "hotpink",
      }}
    >
      <Tabs.Screen
        name="gifting"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <AntDesign
              size={36}
              style={{ marginTop: 4 }}
              color={color}
              name="gift"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons
              size={34}
              style={{ marginTop: 4 }}
              color={color}
              name="fast-food-outline"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              size={30}
              color={color}
              style={{ marginTop: 4 }}
              name="user-o"
            />
          ),
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({
//   tabIcon: {
//     marginBottom: -3,
//     marginTop: 4,
//   },
// });
