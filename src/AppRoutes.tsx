import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomHeader from './components/CustomHeader';
import CustomTabBar from './components/CustomTabBar';
import AboutUsScreen from './screens/AboutUsScreen';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ResourcesScreen from './screens/ResourcesScreen';

export type RootTabParamList = {
  Início: undefined;
  Mapa: undefined;
  Recursos: undefined;
  Sobre: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppRoutes(): JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        header: () => <CustomHeader title={route.name} />,
      })}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Mapa" component={MapScreen} />
      <Tab.Screen name="Recursos" component={ResourcesScreen} />
      <Tab.Screen name="Sobre" component={AboutUsScreen} />
    </Tab.Navigator>
  );
}
