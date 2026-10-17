import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing, Radius } from '../../constants/responsive/responsive';

export default function CategoryChip({ item, isActive, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.chip, isActive ? styles.chipActive : styles.chipInactive]}
    >
      <Image
        source={{ uri: item.icon }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={[styles.text, isActive && styles.textActive]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.xs,
    paddingRight: Spacing.md,
    borderRadius: Radius.xl * 2,
    marginRight: Spacing.sm,
  },
  chipActive: {
    backgroundColor: Colors.primary,
  },
  chipInactive: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F2',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    marginRight: Spacing.sm,
  },
  text: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  textActive: {
    color: '#FFFFFF',
  },
});