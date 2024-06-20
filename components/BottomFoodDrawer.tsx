import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Animated,
  PanResponder,
  Image,
} from "react-native";
import { FoodItem } from "./FoodOrderCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface BottomFoodDrawerProps {
  food: FoodItem;
  isBottomSheetOpen: boolean;
  setIsBottomSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BottomFoodDrawer = (props: BottomFoodDrawerProps) => {
  const { food, isBottomSheetOpen, setIsBottomSheetOpen } = props;
  const { id, name, price, imageSource, description } = food;
  const windowHeight = Dimensions.get("window").height;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isBottomSheetOpen}
      onRequestClose={() => {
        setIsBottomSheetOpen(!isBottomSheetOpen);
      }}
    >
      <View style={[styles.bottomSheet, { height: windowHeight * 0.45 }]}>
        <TouchableOpacity
          onPress={() => setIsBottomSheetOpen(!isBottomSheetOpen)}
          style={styles.closeButton}
        >
          <MaterialCommunityIcons
            name="close-thick"
            size={35}
            color="hotpink"
          />
        </TouchableOpacity>
        <View style={styles.descriptionContainer}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.priceText}>
            {"\u20B9"} {price}
          </Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    position: "absolute",
    left: 0,
    right: 0,
    justifyContent: "flex-start",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignContent: "center",
    bottom: 0,
    borderTopColor: "hotpink",
    borderTopWidth: 8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   width: 10,
    //   height: -15,
    // },
    // shadowColor: "black",
    // elevation: 4,
  },
  closeButtonContainer: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 15,
  },
  closeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "white",
    padding: 15,
    alignItems: "center",
  },
  closeButtonText: {
    color: "black",
  },
  image: {
    alignSelf: "center",
    padding: 5,
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
    borderColor: "hotpink",
    borderWidth: 2,
  },
  descriptionContainer: {
    alignContent: "center",
    alignItems: "center",
    flexDirection: "column",
    alignSelf: "center",
  },
  nameText: {
    padding: 4,
    fontSize: 24,
    fontWeight: "bold",
    color: "deeppink",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  descriptionText: {
    padding: 8,
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
});
export default BottomFoodDrawer;
