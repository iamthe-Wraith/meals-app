import { FC } from 'react';
import { View, Text, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { Meal } from '../../models/meal';
import { styles } from './styles';

interface IProps {
  meal: Meal;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const MealDetails: FC<IProps> = ({ meal, style, textStyle }) => (
  <View style={ [styles.container, style] }>
    <Text style={ [styles.detail, textStyle] }>Duration: { meal.duration }m</Text>
    <Text style={ [styles.detail, textStyle] }>{ meal.complexity }</Text>
    <Text style={ [styles.detail, textStyle] }>{ meal.affordability }</Text>
  </View>
);