import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import StoresScreen from './StoresScreen';
import ActivityScreen from './ActivityScreen';
import ProfileScreen from './ProfileScreen';

import { Colors } from '../../constants/color/color';
import { Radius, Spacing } from '../../constants/responsive/responsive';

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const ICONS = {
  Home: { active: 'home', inactive: 'home-outline' },
  Stores: { active: 'storefront', inactive: 'storefront-outline' },
  Activity: { active: 'git-network', inactive: 'git-network-outline' },
  Profile: { active: 'person', inactive: 'person-outline' },
};

function TabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.floatingContainer,
        { bottom: Math.max(insets.bottom, Spacing.md) },
      ]}
      pointerEvents="box-none"
    >
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const iconConfig = ICONS[route.name] ?? ICONS.Home;

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={
                options.tabBarAccessibilityLabel ?? route.name
              }
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              activeOpacity={0.85}
              style={[
                styles.tabItem,
                isFocused ? styles.activeTabItem : styles.inactiveTabItem,
              ]}
            >
              <Ionicons
                name={isFocused ? iconConfig.active : iconConfig.inactive}
                size={20}
                color={isFocused ? '#FFFFFF' : '#999999'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        // Prevent default tab bar space from pushing content up
        tabBarStyle: { display: 'none' },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stores" component={StoresScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.dark,
    borderRadius: Radius.xl * 3,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xs,
    width: width * 0.72,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
  },
  inactiveTabItem: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'transparent',
  },
});