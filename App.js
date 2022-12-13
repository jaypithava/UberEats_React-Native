import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import DishDetailsScreen from "./src/components/screens/DishDetailsScreen";
import RestaurantDetailsPage from "./src/components/screens/RestaurantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      <DishDetailsScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
