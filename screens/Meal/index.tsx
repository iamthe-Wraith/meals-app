import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FC, useCallback, useLayoutEffect, useMemo } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../types/global';
import { MealDetails } from '../../components/MealDetails';
import { styles } from './styles';
import { globalStyles } from '../../styles';
import { useFavorites } from '../../store/contexts/favorites';
import { IconButton } from '../../components/IconButton';

export type NavigationProps = NativeStackNavigationProp<RootParamList, 'Meal'>;
export type RouteProps = RouteProp<RootParamList, 'Meal'>;

export const Meal: FC = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const navigation = useNavigation();
  const { params } = useRoute<RouteProps>();
  const meal = useMemo(() => params.meal, [params]);
  const isFavorite: boolean = useMemo(() => favorites.includes(meal.id), [favorites, meal]);

  const onFavoritePress = useCallback(() => {
    if (isFavorite) {
      removeFavorite(meal.id);
    } else {
      addFavorite(meal.id);
    }
  }, [isFavorite, meal, addFavorite, removeFavorite]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          icon={ isFavorite ? 'star' : 'star-outline' }
          onPress={ onFavoritePress }
        />
      )
    });
  }, [navigation, params, isFavorite]);

  const renderIngredients = () => {
    const ingredients = meal.ingredients.map((ingredient, index) => (
      <Text key={ index } style={ styles.text }>- { ingredient }</Text>
    ));

    return (
      <View style={ styles.subContainer }>
        <Text style={ styles.subTitle }>Ingredients</Text>
        <View>{ ingredients }</View>
      </View>
    );
  };

  const renderSteps = () => {
    const steps = meal.steps.map((step, index) => (
      <Text key={ index } style={ styles.text }>{ index + 1 }. { step }</Text>
    ));

    return (
      <View style={ styles.subContainer }>
        <Text style={ styles.subTitle }>Steps</Text>
        <View>{ steps }</View>
      </View>
    );
  };

  return (
    <ScrollView style={ globalStyles.flex }>
      <View style={ styles.container }>
        <Image
          source={ { uri: meal.imageUrl } }
          style={ styles.image }
        />
        <Text style={ styles.title }>{ params.meal.title }</Text>
        <MealDetails
          meal={ params.meal }
          textStyle={ styles.mealDetails }
        />
        { renderIngredients() }
        { renderSteps() }
      </View>
    </ScrollView>
  );
}; 