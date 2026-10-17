import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import { Fonts } from '../../constants/fonts/font';
import {
  FontSize,
  Spacing,
  Radius,
} from '../../../components/constants/responsive/responsive';

const Button = ({
  title = 'Button',
  onPress,
  loading = false,
  disabled = false,
  variant = 'primary', 
  leftIcon,
  activeOpacity = 0.8,
  style,
  textStyle,
}) => {
  const isDisabled = disabled || loading;
  const isLight = variant === 'light';

  const bg = isLight ? '#F4F4F6' : '#000000';
  const textColor = isLight ? '#111111' : '#FFFFFF';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={activeOpacity}
      style={[
        styles.base,
        { backgroundColor: bg },
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={[styles.text, { color: textColor }, textStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    width: '100%',
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.lg * 2,
    paddingHorizontal: Spacing.lg,
  },
  text: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
  },
  leftIcon: {
    marginRight: Spacing.sm,
  },
  disabled: {
    opacity: 0.45,
  },
});

export default Button;