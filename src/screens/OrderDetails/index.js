import { FlatList, Image, Text, View } from "react-native";
import React from "react";
import orders from "../../../assets/data/orders.json";
import restaurant from "../../../assets/data/restaurants.json";
import styles from "./styles";
import BasketDetailsItems from "../../components/BasketDishItem";

const order = orders[0];

const OrderDetailsHeader = () => {
  return (
    <View>
      <View style={styles.page}>
        <Image
          source={{
            uri: order.Restaurant.image,
          }}
          style={styles.image}
        />

        <View style={styles.containers}>
          <Text style={styles.title}>{order.Restaurant.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} &#8226; 2 Days ago
          </Text>
          <Text style={styles.menuTitle}>Your Order</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = () => {
    return(
        <FlatList 
        ListHeaderComponent={OrderDetailsHeader}
        data={restaurant[0].dishes}
        renderItem={({item}) => <BasketDetailsItems basketDish={item} />}/>
    )
}

export default OrderDetails;

