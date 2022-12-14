import { SafeAreaView, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <SafeAreaView>
     <FlatList
      data={restaurants}
      renderItem={({item}) => <RestaurantItem restaurant={item} /> }
      showsVerticalScrollIndicator={false}
     />
    </SafeAreaView>
  );
}
