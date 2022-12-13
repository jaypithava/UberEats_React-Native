import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Basket from "./src/components/screens/Basket";
import DishDetailsScreen from "./src/components/screens/DishDetailsScreen";
import OrderDetails from "./src/components/screens/OrderDetails";
import OrderScreen from "./src/components/screens/OrderScreen";
import RestaurantDetailsPage from "./src/components/screens/RestaurantDetailsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      {/* <RestaurantDetailsPage /> */}
      {/* <DishDetailsScreen /> */}
      <Basket />
      {/* <OrderScreen /> */}
      {/* <OrderDetails /> */}
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
