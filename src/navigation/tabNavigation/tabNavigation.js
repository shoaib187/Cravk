import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../../screens/home/home';
import StoresScreen from '../../screens/stores/stores';
import ActivityScreen from '../../screens/activity/activity';
import ProfileScreen from '../../screens/profile/profile';

const Tab = createBottomTabNavigator();

const ORANGE = '#FF5A00';

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: ORANGE,

        tabBarIcon: ({ focused, color }) => {
          const icons = {
            Home: ['home', 'home-outline'],
            Stores: ['storefront', 'storefront-outline'],
            Activity: ['git-network', 'git-network-outline'],
            Profile: ['person', 'person-outline'],
          };

          const [activeIcon, inactiveIcon] =
            icons[route.name] || icons.Home;

          return (
            <Ionicons
              name={focused ? activeIcon : inactiveIcon}
              size={focused ? 28 : 26}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stores" component={StoresScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
