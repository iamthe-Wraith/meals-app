import { FC, useCallback, useEffect, useState } from 'react';
import { FlatList, ListRenderItem, useWindowDimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { CategoryItem } from '../../components/CategoryItem';
import { CATEGORIES } from '../../data/dummy-data';
import { Category } from '../../models/category';
import { styles } from './styles';
import { RootParamList } from '../../types/global';

export type NavigationProps = DrawerNavigationProp<RootParamList, 'Categories'>;

export const Categories: FC = () => {
  const navigation = useNavigation<NavigationProps>();
  const { width: windowWidth } = useWindowDimensions();
  const [columns, setColumns] = useState(Math.floor(windowWidth / 100));

  useEffect(() => {
    setColumns(Math.floor(windowWidth / 140));
  }, [windowWidth]);

  const onCategoryPress = useCallback((category: Category) => {
    navigation.navigate('MealsOverview', { category });
  }, []);

  const renderCategory: ListRenderItem<Category> = useCallback(({ item }) => (
    <CategoryItem
      key={ item.id }
      category={ item }
      onPress={ onCategoryPress }
      style={ styles.categoryItem }
    />
  ), []);
 
  return (
    <View style={ styles.container }>
      <FlatList
        key={ columns }
        data={ CATEGORIES }
        renderItem={ renderCategory }
        numColumns={ columns }
      />
    </View>
  );
};