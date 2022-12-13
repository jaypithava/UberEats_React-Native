import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React from "react";
import restaurants from "../../../../assets/data/restaurants.json";
import BasketDetailsItems from "../../BasketDishItem";

const restaurant = restaurants[2];

const Basket = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text style={{fontSize:19, fontWeight:'bold', marginTop:20}}>Your Item</Text>

      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDetailsItems basketDish={item} />}
      />

      <Text style={styles.description}>{restaurant.description}</Text>
      <View style={styles.separator} />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Create Order</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    paddingVertical: 40,
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  description: {
    color: "gray",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantity: {
    fontSize: 25,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default Basket;
