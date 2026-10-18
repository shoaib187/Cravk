
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DARK = '#151515';
const ORANGE = '#FF5A00';

const TAB_SIZE = 64;
const ACTIVE_SIZE = 76;
const BAR_WIDTH = TAB_SIZE * 4;
const BAR_HEIGHT = 80;

const ICONS = {
  Home: {
    active: 'home',
    inactive: 'home-outline',
  },
  Stores: {
    active: 'storefront',
    inactive: 'storefront-outline',
  },
  Activity: {
    active: 'git-network',
    inactive: 'git-network-outline',
  },
  Profile: {
    active: 'person',
    inactive: 'person-outline',
  },
};

/**
 * Creates the connected liquid bubble silhouette.
 * Four circular lobes with smooth curved valleys.
 */
const createLiquidPath = () => {
  const centers = [32, 96, 160, 224];
  const top = 8;
  const bottom = 72;
  const middle = 40;

  let path = `M 0 ${middle}`;

  // Top half of the liquid shape
  centers.forEach((cx, index) => {
    path += `
      C ${cx - 32} ${middle - 18},
        ${cx - 25} ${top},
        ${cx} ${top}
    `;

    if (index < centers.length - 1) {
      const next = centers[index + 1];
      const valley = (cx + next) / 2;

      path += `
        C ${cx + 19} ${top},
          ${valley - 12} 25,
          ${valley} 25

        C ${valley + 12} 25,
          ${next - 19} ${top},
          ${next} ${top}
      `;
    }
  });

  // Right outer curve
  path += `
    C 249 8, 256 25, 256 40
    C 256 55, 249 72, 224 72
  `;

  // Bottom half, moving right to left
  for (let i = centers.length - 1; i > 0; i--) {
    const cx = centers[i];
    const prev = centers[i - 1];
    const valley = (cx + prev) / 2;

    path += `
      C ${cx - 19} 72,
        ${valley + 12} 55,
        ${valley} 55

      C ${valley - 12} 55,
        ${prev + 19} 72,
        ${prev} 72
    `;
  }

  path += `
    C 7 72, 0 55, 0 40
    Z
  `;

  return path;
};

const LIQUID_PATH = createLiquidPath();

const TabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      pointerEvents="box-none"
      style={[
        styles.floatingContainer,
        {
          bottom: Math.max(insets.bottom, 12) + 12,
        },
      ]}
    >
      <View style={styles.shadowContainer}>
        {/* Liquid background */}
        <Svg
          width={BAR_WIDTH}
          height={BAR_HEIGHT}
          viewBox="0 0 256 80"
          style={StyleSheet.absoluteFillObject}
        >
          <Path
            d={LIQUID_PATH}
            fill={DARK}
          />
        </Svg>

        {/* Navigation buttons */}
        <View style={styles.tabsRow}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const options = descriptors[route.key].options;
            const icon = ICONS[route.name] || ICONS.Home;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (
                !isFocused &&
                !event.defaultPrevented
              ) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <View
                key={route.key}
                style={styles.tabSlot}
              >
                <TouchableOpacity
                  onPress={onPress}
                  onLongPress={onLongPress}
                  activeOpacity={0.85}
                  accessibilityRole="button"
                  accessibilityState={{
                    selected: isFocused,
                  }}
                  accessibilityLabel={
                    options.tabBarAccessibilityLabel ??
                    route.name
                  }
                  testID={options.tabBarButtonTestID}
                  style={[
                    styles.tabButton,
                    isFocused && styles.activeTab,
                  ]}
                >
                  <Ionicons
                    name={
                      isFocused
                        ? icon.active
                        : icon.inactive
                    }
                    size={isFocused ? 28 : 26}
                    color="#FFFFFF"
                  />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  floatingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    elevation: 20,
  },

  shadowContainer: {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',

    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 0.23,
        shadowRadius: 12,
        shadowOffset: {
          width: 0,
          height: 7,
        },
      },
      android: {
        elevation: 12,
      },
    }),
  },

  tabsRow: {
    width: BAR_WIDTH,
    height: BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabSlot: {
    width: TAB_SIZE,
    height: BAR_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },

  tabButton: {
    width: TAB_SIZE,
    height: TAB_SIZE,
    borderRadius: TAB_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  activeTab: {
    width: ACTIVE_SIZE,
    height: ACTIVE_SIZE,
    borderRadius: ACTIVE_SIZE / 2,
    backgroundColor: ORANGE,
    borderWidth: 4,
    borderColor: '#101010',
    zIndex: 10,
    elevation: 8,
  },
});
