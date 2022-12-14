import { View, FlatList } from "react-native";
import React from "react";
import restaurants from "../../../assets/data/restaurants.json";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native"; 

const restaurant = restaurants[1];

const RestaurantDetailsPage = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const id = route.params.id;

  return (
    <View style={styles.page}>
      {/* <DishListItem dish={restaurant.dishes[0]}/>
      <DishListItem dish={restaurant.dishes[2]}/> */}
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={(item, key) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsPage;
