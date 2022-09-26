import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

const DefaultHeaderOptions = {
  headerStyle: { backgroundColor: '#24180f' },
  headerTintColor: '#fff',
};

export const DefaultStackHeaderOptions: NativeStackNavigationOptions = {
  ...DefaultHeaderOptions,
  contentStyle: { backgroundColor: '#24180f' },
};

export const DefaultDrawerHeaderOptions: DrawerNavigationOptions = {
  ...DefaultHeaderOptions,
  sceneContainerStyle: { backgroundColor: '#24180f' },
  drawerContentStyle: { backgroundColor: '#24180f' },
  drawerInactiveTintColor: '#fff',
  drawerActiveTintColor: '#24180f',
  drawerActiveBackgroundColor: '#e4baa1',
};