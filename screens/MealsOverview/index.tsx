import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FC, useCallback, useLayoutEffect, useMemo } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MealItem } from '../../components/MealItem';
import { MEALS } from '../../data/dummy-data';
import { Meal } from '../../models/meal';
import { RootParamList } from '../../types/global';
import { styles } from './styles';

export type NavigationProps = NativeStackNavigationProp<RootParamList, 'MealsOverview'>;
export type RouteProps = RouteProp<RootParamList, 'MealsOverview'>;

export const MealsOverview: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const { params } = useRoute<RouteProps>();
  const meals = useMemo(() => MEALS.filter(meal => meal.categoryIds.includes(params.category.id)), [MEALS]);
 
  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.category.title
    });
  }, [navigation, params]);

  const onMealPress = useCallback((meal: Meal) => {
    navigation.navigate('Meal', { meal });
  }, []);

  const renderItem: ListRenderItem<Meal> = useCallback(({ item }) => (
    <MealItem
      meal={ item }
      style={ styles.mealItem }
      onPress={ onMealPress }
    />
  ), []);

  return (
    <View style={ styles.container }>
      <FlatList
        data={ meals }
        renderItem={ renderItem }
        keyExtractor={ item => item.id }
        style={ styles.list }
      />
    </View>
  );
};