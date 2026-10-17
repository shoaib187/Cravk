import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing } from '../../constants/responsive/responsive';
import BrandCard from '../../common/brandCard/brandCard';

const brandsData = [
  {
    id: '1',
    name: 'Talabat Mart',
    tagline: 'Freshness guaranteed',
    taglineIcon: '🥩',
    time: '25-60 mins',
    rating: '4.9',
    logo: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'LuLu Hypermarket',
    tagline: 'Where the world comes to shop',
    taglineIcon: '🛒',
    time: '30-45 mins',
    rating: '4.7',
    logo: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Carrefour',
    tagline: 'Great prices every day',
    taglineIcon: '🏷️',
    time: '20-40 mins',
    rating: '4.8',
    logo: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop',
  },
];

export default function BrandsSection({
  title = 'Big brands near you',
  brands = brandsData,
  onSeeAllPress,
  onBrandPress,
}) {
  return (
    <View style={styles.section}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {brands.map((brand) => (
          <BrandCard
            key={brand.id}
            {...brand}
            onPress={() => onBrandPress && onBrandPress(brand)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: Spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.sm + 2,
  },
  title: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  seeAll: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
});