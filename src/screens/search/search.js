import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../../components/constants/fonts/font';
import { Colors } from '../../components/constants/color/color';
import { FontSize, Spacing, Radius, Responsive } from '../../components/constants/responsive/responsive';
import RestaurantCard from '../../components/common/restaurantCard/restaurantCard';

const categories = [
  { id: '1', name: 'Healthy', icon: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop' },
  { id: '2', name: 'Burgers', icon: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop' },
  { id: '3', name: 'Grills', icon: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200&auto=format&fit=crop' },
  { id: '4', name: 'Pizza', icon: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200&auto=format&fit=crop' },
];

const filterChips = [
  { id: '1', name: 'Sort by', hasDropdown: true },
  { id: '2', name: 'Offers' },
  { id: '3', name: 'Rating 4.5+' },
  { id: '4', name: 'Fast delivery' },
];

const restaurants = [
  {
    id: '1',
    name: 'Bartone',
    categories: 'Healthy, Cafe, Breakfast, Coffee',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&auto=format&fit=crop',
    discount: 'Up to 0.550 KD off',
    time: '25-60 mins',
    rating: '4.9',
  },
  {
    id: '2',
    name: 'Elevation Burger',
    categories: 'Elevation Burger in Kaifan serving fresh',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=200&auto=format&fit=crop',
    discount: 'Up to 0.550 KD off',
    time: '15-30 mins',
    rating: '4.3',
  },
];

export default function Search({ navigation }) {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.searchBox}>
          <View style={styles.searchIconCircle}>
            <Feather name="search" size={Responsive.RFValue(14)} color={Colors.dark} />
          </View>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search for lebanese"
            placeholderTextColor="#9A9AA0"
            style={styles.searchInput}
          />
        </View>

        {/* ── 2. Hot Deals Banner ── */}
        <View style={styles.bannerWrap}>
          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1631709497146-a239ef373cf1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
            }}
            style={styles.bannerImage}
            resizeMode="cover"
          >
            <View style={styles.bannerTopRow}>
              <View>
                <Text style={styles.bannerTitleSmall}>
                  Hot Deals! <Text style={styles.bannerAccent}>💥</Text>
                </Text>
                <Text style={styles.bannerTitleBig}>
                  Up to{' '}
                  <Text style={styles.bannerAccent}>40%</Text> Off
                </Text>
              </View>

              <View style={styles.percentBadge}>
                <MaterialCommunityIcons
                  name="percent"
                  size={18}
                  color="#FFFFFF"
                />
              </View>
            </View>

            <View style={styles.bannerBottomRow}>
              {/* Pagination pill */}
              <View style={styles.paginationPill}>
                <View style={styles.paginationActiveDot} />
                <View style={styles.paginationInactiveDot} />
              </View>

              <Text style={styles.bannerSubtitle}>
                Don't miss out on today's{'\n'}biggest discounts.
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* ── 3. Section heading ── */}
        <Text style={styles.sectionTitle}>All restaurants</Text>

        {/* ── 4. Category pills ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          style={styles.horizontalScrollSpacing}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setActiveCategory(isActive ? null : cat.id)}
                activeOpacity={0.8}
                style={[
                  styles.categoryPill,
                  isActive && styles.categoryPillActive,
                ]}
              >
                <View style={styles.categoryIconWrap}>
                  <Image
                  source={{ uri: cat.icon }}
                    style={styles.categoryIcon}
                    resizeMode="cover"
                  />
                </View>
                <Text
                  style={[
                    styles.categoryText,
                    isActive && styles.categoryTextActive,
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ── 5. Filter chips ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          style={styles.horizontalScrollSpacing}
        >
          {filterChips.map((chip) => {
            const isSelected = selectedFilter === chip.id;
            return (
              <TouchableOpacity
                key={chip.id}
                onPress={() => setSelectedFilter(isSelected ? null : chip.id)}
                activeOpacity={0.7}
                style={[
                  styles.filterChip,
                  isSelected && styles.filterChipActive,
                ]}
              >
                {chip.hasDropdown && (
                  <Ionicons
                    name="swap-vertical"
                    size={12}
                    color={isSelected ? '#FFFFFF' : Colors.dark}
                    style={styles.chipIconLeft}
                  />
                )}
                <Text
                  style={[
                    styles.filterChipText,
                    isSelected && styles.filterChipTextActive,
                  ]}
                >
                  {chip.name}
                </Text>
                {chip.hasDropdown && (
                  <Ionicons
                    name="chevron-down"
                    size={12}
                    color={isSelected ? '#FFFFFF' : Colors.dark}
                    style={styles.chipIconRight}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ── 6. Restaurant list — reuse RestaurantCard ── */}
        {restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            {...item}
            onPress={() =>
              navigation?.navigate('RestaurantDetail', { id: item.id })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.xl,
  },

  // ── 1. Search ──
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl * 2,
    paddingHorizontal: Spacing.md,
    height: 48,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    marginBottom: Spacing.md,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  searchIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoRegular,
    color: Colors.dark,
    paddingVertical: 0,
  },

  bannerWrap: {
    borderRadius: Radius.xl * 1.2,
    overflow: 'hidden',
    height: Responsive.RFValue(160),
    marginBottom: Spacing.lg,
  },
  bannerImage: {
    flex: 1,
    padding: Spacing.md,
    justifyContent: 'space-between',
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bannerTitleSmall: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
    marginBottom: 2,
  },
  bannerTitleBig: {
    fontSize: FontSize.xxl,
    fontFamily: Fonts.LatoBold,
    color: Colors.background,
  },
  bannerAccent: {
    color: Colors.primary,
  },
  percentBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  paginationPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: Radius.xl * 2,
    padding: 4,
    width: 48,
    justifyContent: 'space-between',
  },
  paginationActiveDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  paginationInactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#9A9AA0',
    marginRight: 4,
  },
  bannerSubtitle: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'right',
    lineHeight: FontSize.xs * 1.5,
  },

  // ── 3. Section title ──
  sectionTitle: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: Spacing.sm + 2,
  },

  // ── 4. Categories ──
  horizontalScrollSpacing: {
    marginBottom: Spacing.md,
  },
  horizontalListContent: {
    paddingRight: Spacing.md,
  },
  categoryPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl * 2,
    padding: Spacing.xs,
    paddingRight: Spacing.md,
    marginRight: Spacing.sm,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  categoryPillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryIconWrap: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: Spacing.sm,
    backgroundColor: Colors.background,
  },
  categoryIcon: {
    width: '100%',
    height: '100%',
  },
  categoryText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },

  // ── 5. Filter chips ──
  filterChip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs + 2,
    borderRadius: Radius.xl * 2,
    borderWidth: 1,
    borderColor: '#E8E8EC',
    backgroundColor: '#FFFFFF',
    marginRight: Spacing.xs + 2,
  },
  filterChipActive: {
    backgroundColor: Colors.dark,
    borderColor: Colors.dark,
  },
  filterChipText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  filterChipTextActive: {
    color: '#FFFFFF',
  },
  chipIconLeft: {
    marginRight: 4,
  },
  chipIconRight: {
    marginLeft: 4,
  },
});