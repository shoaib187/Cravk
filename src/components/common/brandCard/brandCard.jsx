import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing, Radius } from '../../constants/responsive/responsive';

export default function BrandCard({
  logo,
  name,
  tagline = 'Freshness guaranteed',
  taglineIcon = '🥩',
  time,
  rating,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={styles.card}>
      <View style={styles.leftSection}>
        <View style={styles.logoWrap}>
          <Image
            source={{ uri: logo }}
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>

        {/* Info */}
        <View style={styles.info}>
          {/* Tagline */}
          <View style={styles.taglineRow}>
            <Text style={styles.taglineIcon}>{taglineIcon}</Text>
            <Text style={styles.taglineText} numberOfLines={1}>
              {tagline}
            </Text>
          </View>

          {/* Name */}
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>

          {/* Time */}
          <View style={styles.timeRow}>
            <View style={styles.timeIconWrap}>
              <Ionicons name="time-outline" size={10} color="#FFFFFF" />
            </View>
            <Text style={styles.timeText}>{time}</Text>
          </View>
        </View>
      </View>

      {/* Rating badge (top-right) */}
      <View style={styles.ratingBadge}>
        <Ionicons
          name="star"
          size={10}
          color="#F59E0B"
          style={styles.ratingStar}
        />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 288,
    backgroundColor: Colors.white,
    borderRadius: Radius.xl,
    padding: Spacing.xs,
    marginRight: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },

  // ── Left ──
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: Spacing.xs,
  },
  logoWrap: {
    width: 80,
    height: 80,
borderRadius: Radius.xl,
    overflow: 'hidden',
    marginRight: Spacing.sm + 2,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },

  // ── Info ──
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  taglineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  taglineIcon: {
    fontSize: FontSize.xs,
    marginRight: 4,
  },
  taglineText: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    flexShrink: 1,
  },
  name: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: Spacing.xs,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIconWrap: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
  },
  timeText: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoRegular,
    color: '#666',
  },

  // ── Rating badge ──
  ratingBadge: {
    position: 'absolute',
    top: Spacing.sm + 2,
    right: Spacing.sm + 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs - 1,
    borderRadius: Radius.xl * 2,
    backgroundColor: Colors.dark,
  },
  ratingStar: {
    marginRight: 3,
  },
  ratingText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
});