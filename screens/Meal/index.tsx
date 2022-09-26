import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FC, useLayoutEffect, useMemo } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../types/global';
import { MealDetails } from '../../components/MealDetails';
import { styles } from './styles';
import { globalStyles } from '../../styles';

export type NavigationProps = NativeStackNavigationProp<RootParamList, 'Meal'>;
export type RouteProps = RouteProp<RootParamList, 'Meal'>;

export const Meal: FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute<RouteProps>();
  const meal = useMemo(() => params.meal, [params]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => <Text>Boom</Text>
    });
  }, [navigation, params]);

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