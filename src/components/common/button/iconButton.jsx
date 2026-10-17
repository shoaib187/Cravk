import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { Colors } from '../../constants/color/color';

export default function IconButton({
  // Icon
  name,
  IconComponent = Feather,
  iconSize = 18,
  iconColor = Colors.dark,

  // Interaction
  onPress,
  activeOpacity = 0.8,
  disabled = false,

  // Style
  size = 40,
  variant = 'light', // 'light' | 'dark' | 'ghost' | 'primary'
  showBadge = false,
  badgeColor = Colors.primary,
  style,
  iconStyle,
}) {
  const variantStyles = {
    light: {
      backgroundColor: '#FFFFFF',
    },
    dark: {
      backgroundColor: Colors.dark,
    },
    primary: {
      backgroundColor: Colors.primary,
    },
    ghost: {
      backgroundColor: 'transparent',
    },
  }[variant];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[
        styles.base,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        variantStyles,
        disabled && styles.disabled,
        style,
      ]}
    >
      <IconComponent
        name={name}
        size={iconSize}
        color={iconColor}
        style={iconStyle}
      />
      {showBadge && (
        <View
          style={[
            styles.badge,
            {
              backgroundColor: badgeColor,
              top: size * 0.2,
              right: size * 0.2,
            },
          ]}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.45,
  },
  badge: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});