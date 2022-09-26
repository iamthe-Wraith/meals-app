import { Category } from '../models/category';
import { Meal } from '../models/meal';

export type RootParamList = {
  Categories: undefined;
  Favorites: undefined;
  Drawer: undefined;
  MealsOverview: { category: Category };
  Meal: { meal: Meal };
}