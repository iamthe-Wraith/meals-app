import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { Categories } from './screens/Categories';
import { MealsOverview } from './screens/MealsOverview';
import { RootParamList } from './types/global';
import { Meal } from './screens/Meal';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Favorites } from './screens/Favorites';
import { DefaultDrawerHeaderOptions, DefaultStackHeaderOptions } from './config/screen';
import { FavoritesStore } from './store/contexts/favorites';

const Stack = createNativeStackNavigator<RootParamList>();
const Drawer = createDrawerNavigator<RootParamList>();

const DrawNavigator: FC = () => (
  <Drawer.Navigator useLegacyImplementation={ true } screenOptions={ DefaultDrawerHeaderOptions }>
    <Drawer.Screen
      name='Categories'
      component={ Categories }
      options={ {
        title: 'All Categories',
        drawerIcon: ({ color, size }) => <Ionicons name='list' size={ size } color={ color } />,
      } }
    />
    <Drawer.Screen
      name='Favorites'
      component={ Favorites }
      options={ {
        drawerIcon: ({ color, size }) => <Ionicons name='star' size={ size } color={ color } />,
      } }
    />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <>
      <FavoritesStore>
        <NavigationContainer>
          <Stack.Navigator screenOptions={ DefaultStackHeaderOptions }>
            <Stack.Screen
              name='Drawer'
              component={ DrawNavigator }
              options={ {
                headerShown: false,
              } }
            />
            <Stack.Screen
              name='MealsOverview'
              component={ MealsOverview }
            />
            <Stack.Screen
              name='Meal'
              component={ Meal }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesStore>
      <StatusBar style='light' />
    </>
  );
}
