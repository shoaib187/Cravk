import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing, Radius, Responsive } from '../../constants/responsive/responsive';

export default function FeaturedCard({
  title,
  titleMuted,
  subtitle,
  time,
  price,
  offerLabel = 'Special offers',
  offerValue,
  image,
  isFreeDelivery = false,
  onAddPress,
  onPress,
  width = 288,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.92}
      onPress={onPress}
      style={[styles.card, { width }]}
    >
      <View style={styles.topRow}>
        <View style={styles.timePill}>
          <Ionicons
            name="time"
            size={Responsive.RFValue(14)}
            color="#FFFFFF"
            style={{ marginRight: Spacing.xs }}
          />
          <Text style={styles.timeText}>{time}</Text>
        </View>
        {isFreeDelivery && (
          <Text style={styles.freeDeliveryText}>🛵 Free Delivery</Text>
        )}
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {titleMuted ? (
          <>
            {title} <Text style={styles.titleMuted}>{titleMuted}</Text>
          </>
        ) : (
          title
        )}
      </Text>
      {subtitle ? <Text style={styles.title}>{subtitle}</Text> : null}

      <Text style={styles.price}>
        <Text style={styles.priceCurrency}>$</Text>
        {price}
      </Text>

      {offerValue && (
        <View style={styles.offerPill}>
          <View style={styles.offerIcon}>
            <MaterialCommunityIcons
              name="brightness-percent"
              size={Responsive.RFValue(14)}
              color="#111111"
            />
          </View>
          <View>
            <Text style={styles.offerLabel}>{offerLabel}</Text>
            <Text style={styles.offerValue}>{offerValue}</Text>
          </View>
        </View>
      )}

      {image && (
        <View style={styles.foodImageWrap}>
          <Image
            source={{ uri: image }}
            style={styles.foodImage}
            resizeMode="cover"
          />
        </View>
      )}

      {onAddPress && (
        <TouchableOpacity
          style={styles.addCartButton}
          activeOpacity={0.85}
          onPress={onAddPress}
        >
          <Ionicons name="cart-outline" size={18} color="#FFFFFF" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Radius.xl * 1.5,
    padding: Spacing.md + 2,
    borderWidth: 1,
    borderColor: Colors.white,
    marginRight: Spacing.md,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
      marginBottom: Spacing.sm + 2,
    gap:Spacing.md
  },
  timePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.xl * 4,
  },
  timeText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
  freeDeliveryText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
  title: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    lineHeight: FontSize.lg * 1.2,
  },
  titleMuted: {
    color: '#C4C4CA',
  },
  price: {
    fontSize: FontSize.xl,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginTop: Spacing.sm,
    marginBottom: Spacing.sm + 2,
  },
  priceCurrency: {
    fontSize: FontSize.sm,
    color: Colors.primary,
  },
  offerPill: {
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs + 2,
    borderRadius: Radius.xl * 4,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  offerIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  offerLabel: {
    fontSize: 9,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
  offerValue: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  foodImageWrap: {
    position: 'absolute',
    bottom: -24,
    right: -24,
    width: 144,
    height: 144,
    borderRadius: 72,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  foodImage: {
    width: '100%',
    height: '100%',
  },
  addCartButton: {
    position: 'absolute',
    bottom: Spacing.md,
    right: Spacing.md,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
});