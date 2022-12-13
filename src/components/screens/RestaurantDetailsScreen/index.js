import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import restaurants from "../../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
const restaurant = restaurants[1];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />

    
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />

      <View style={styles.containers}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226;{" "}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  containers: {
    margin:10,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 15,
    color: "grey",
  },
});

export default RestaurantDetailsPage;
