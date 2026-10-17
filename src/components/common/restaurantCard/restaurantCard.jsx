import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import {
  FontSize,
  Spacing,
  Radius,
} from '../../../components/constants/responsive/responsive';

export default function RestaurantCard({
  image,
  logo,
  discount,
  name,
  categories,
  time,
  isFreeDelivery = true,
  rating,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.thumbWrap}>
          <Image
            source={{ uri: image }}
            style={styles.thumbImage}
            resizeMode="cover"
          />
          {logo && (
            <View style={styles.logoBadge}>
              <Image
                source={{ uri: logo }}
                style={styles.logoImage}
                resizeMode="cover"
              />
            </View>
          )}
        </View>

        {/* Details */}
        <View style={styles.details}>
          {discount && (
            <View style={styles.discountRow}>
              <Text style={styles.discountEmoji}>🎁</Text>
              <Text style={styles.discountText} numberOfLines={1}>
                {discount}
              </Text>
            </View>
          )}

          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          <Text style={styles.categories} numberOfLines={1}>
            {categories}
          </Text>

          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons
                name="time-outline"
                size={11}
                color={Colors.dark}
                style={styles.metaIcon}
              />
              <Text style={styles.metaText}>{time}</Text>
            </View>
            <Text style={styles.metaDot}>•</Text>
            <View style={styles.metaItem}>
              <Ionicons
                name="bicycle-outline"
                size={11}
                color={Colors.dark}
                style={styles.metaIcon}
              />
              <Text style={styles.metaText}>
                {isFreeDelivery ? 'Free' : 'Paid'}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Right side */}
      <View style={styles.rightSection}>
        <View style={styles.ratingBadge}>
          <Ionicons
            name="star"
            size={10}
            color={Colors.primary}
            style={styles.metaIcon}
          />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <View style={styles.arrowButton}>
          <Ionicons name="arrow-forward" size={16} color="#FFFFFF" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl,
    padding: Spacing.sm-2,
    marginBottom: Spacing.sm + 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  // ── Left section ──
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: Spacing.xs,
  },
  thumbWrap: {
    width: 112,
    height: 96,
    borderRadius: Radius.xl,
    overflow: 'hidden',
    marginRight: Spacing.sm + 2,
    backgroundColor: Colors.background,
    position: 'relative',
  },
  thumbImage: {
    width: '100%',
    height: '100%',
  },
  logoBadge: {
    position: 'absolute',
    top: Spacing.xs + 2,
    left: Spacing.xs + 2,
    width: 32,
    height: 32,
    borderRadius: Radius.md,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.06)',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: Radius.sm,
  },

  // ── Details ──
  details: {
    flex: 1,
    justifyContent: 'center',
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  discountEmoji: {
    fontSize: FontSize.sm,
    marginRight: 4,
  },
  discountText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.primary,
    flexShrink: 1,
  },
  name: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: 2,
  },
  categories: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9A9A',
    marginBottom: Spacing.xs + 2,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Spacing.xs,
  },
  metaIcon: {
    marginRight: 3,
  },
  metaText: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoRegular,
    color: Colors.dark,
    opacity: 0.7,
  },
  metaDot: {
    fontSize: FontSize.xs - 1,
    color: '#D4D4D8',
    marginRight: Spacing.xs,
  },

  // ── Right side ──
  rightSection: {
    height: 96,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: Spacing.xs,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    paddingHorizontal: Spacing.sm+2,
    paddingVertical: Spacing.sm-2,
    borderRadius: Radius.xl * 2,
  },
  ratingText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
  arrowButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});