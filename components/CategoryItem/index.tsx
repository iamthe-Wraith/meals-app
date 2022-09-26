import { FC, useCallback } from 'react';
import { View, Text, ViewStyle, StyleProp, Pressable, Platform } from 'react-native';
import { Category } from '../../models/category';
import { styles } from './styles';

export interface IProps {
  category: Category;
  onPress: (category: Category) => void;
  style?: StyleProp<ViewStyle>;
}

export const CategoryItem: FC<IProps> = ({ category, onPress, style }) => {
  const onCategoryPress = useCallback(() => {
    onPress(category);
  }, [category, onPress]);

  return (
    <View style={ [styles.container, { backgroundColor: category.color }, style] }>
      <Pressable
        android_ripple={ { color: '#ffffff55' } }
        onPress={ onCategoryPress }
        style={ ({ pressed }) => [styles.button, (pressed && Platform.OS === 'ios') && styles.pressed] }
      >
        <View style={ styles.innerContainer }>
          <Text>{ category.title }</Text>
        </View>
      </Pressable>
    </View>
  );
};