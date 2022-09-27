import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FC, useCallback, useMemo } from 'react';
import { MealsList } from '../../components/MealsList';
import { MEALS } from '../../data/dummy-data';
import { Meal } from '../../models/meal';
import { useFavorites } from '../../store/contexts/favorites';
import { RootParamList } from '../../types/global';
import { styles } from './styles';

export type NavigationProps = DrawerNavigationProp<RootParamList, 'Favorites'>;

export const Favorites: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const { favorites } = useFavorites();
  const meals = useMemo(() => MEALS.filter(meal => favorites.includes(meal.id)), [favorites]);

  const onMealPress = useCallback((meal: Meal) => {
    navigation.navigate('Meal', { meal });
  }, []);

  if (!favorites.length) {
    return (
      <View style={ styles.noFavs }>
        <Text style={ styles.text }>No Favorites Yet...</Text>
      </View>
    );
  }

  return <MealsList meals={ meals } onMealPress={ onMealPress } />;
};