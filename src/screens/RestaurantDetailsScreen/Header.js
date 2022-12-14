import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

const RestaurantHeader = ({restaurant}) => {
  return (
    <View>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={styles.image}
      />


      <View style={styles.containers}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          $ {restaurant.deliveryFee.toFixed(1)} &#8226;{" "}
          {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  );
};



export default RestaurantHeader;
