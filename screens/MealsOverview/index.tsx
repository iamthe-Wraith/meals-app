import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FC, useCallback, useLayoutEffect, useMemo } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MEALS } from '../../data/dummy-data';
import { Meal } from '../../models/meal';
import { RootParamList } from '../../types/global';
import { MealsList } from '../../components/MealsList';

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

  return <MealsList meals={ meals } onMealPress={ onMealPress } />;
};