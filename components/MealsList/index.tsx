import React, { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { Meal } from '../../models/meal';
import { MealItem } from '../MealItem';
import { styles } from './styles';

interface IProps {
  meals: Meal[];
  onMealPress: (meal: Meal) => void;
}

export const MealsList: FC<IProps> = ({ meals, onMealPress }) => {
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