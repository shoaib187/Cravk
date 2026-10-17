import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing, Radius, Responsive } from '../../constants/responsive/responsive';
import IconButton from '../../common/button/iconButton';

export default function Header({
  address = '89 Street, Mirqab',
  addressLabel = 'Deliver to',
  onAddressPress,
  onNotificationPress,
  onCartPress,
  hasCartBadge = true,
}) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        style={styles.addressPill}
        activeOpacity={0.85}
        onPress={onAddressPress}
      >
        <View style={styles.addressIconCircle}>
          <Ionicons name="bicycle" size={Responsive.RFValue(18)} color={Colors.dark} />
        </View>
        <View style={styles.addressTextWrap}>
          <Text style={styles.addressLabel}>{addressLabel}</Text>
          <Text style={styles.addressValue} numberOfLines={1}>
            {address}
          </Text>
        </View>
        <Ionicons
          name="chevron-down"
          size={Responsive.RFValue(14)}
          color={Colors.dark}
          style={styles.addressChevron}
        />
      </TouchableOpacity>

      <View style={styles.iconRow}>
        <IconButton name="bell" onPress={onNotificationPress} />
<IconButton
  name="shopping-bag"
  onPress={onCartPress}
  showBadge
/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.lg,
  },
  addressPill: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '65%',
  },
  addressIconCircle: {
    width: Responsive.RFValue(36),
    height: Responsive.RFValue(36),
    borderRadius: Radius.xl*3,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  addressTextWrap: {
    marginRight: Spacing.xs,
    flexShrink: 1,
  },
  addressLabel: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
  addressValue: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  addressChevron: {
    marginLeft: 4,
  },
  iconRow: {
    flexDirection: 'row',
      alignItems: 'center',
    gap:Spacing.xs
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  iconButtonSpaced: {
    marginLeft: Spacing.sm,
  },
  badgeDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
  },
});