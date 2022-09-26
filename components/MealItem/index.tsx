import { FC, useCallback } from 'react';
import { View, Text, Pressable, Image, StyleProp, ViewStyle } from 'react-native';
import { Meal } from '../../models/meal';
import { MealDetails } from '../MealDetails';
import { styles } from './styles';

interface IProps {
  meal: Meal;
  onPress: (meal: Meal) => void;
  style?: StyleProp<ViewStyle>;
}

export const MealItem: FC<IProps> = ({ meal, style, onPress }) => {
  const onMealPress = useCallback(() => {
    onPress(meal);
  }, [onPress]);

  return (
    <View style={ [styles.container, style] }>
      <Pressable onPress={ onMealPress }>
        <View style={ styles.imageContainer }>
          <Image
            source={ { uri: meal.imageUrl } }
            style={ styles.image }
          />
          <Text style={ styles.title }>{ meal.title }</Text>
        </View>
        <MealDetails meal={ meal } />
      </Pressable>
    </View>
  );
};