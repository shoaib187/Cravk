import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Fonts } from '../../components/constants/fonts/font';
import { Colors } from '../../components/constants/color/color';
import {
  FontSize,
  Spacing,
  Radius,
} from '../../components/constants/responsive/responsive';

const { width } = Dimensions.get('window');
const CARD_GAP = Spacing.sm;
const CARD_WIDTH = (width - Spacing.md * 2 - CARD_GAP) / 2;


const categories = [
  { id: '1', name: 'Trending Picks 🔥' },
  { id: '2', name: 'New In' },
  { id: '3', name: 'Babka' },
  { id: '4', name: 'Brunch' },
];

const menuItems = [
  {
    id: '1',
    name: 'Gourmet Egg Sandwich',
    description: 'Free-range eggs, fried in olive oil.',
    price: '3.97',
    discount: '-25% Off',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Zaater Babka',
    description: 'Babka layered with zaatar with labneh.',
    price: '2.00',
    discount: '-20% Off',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Con Benedict',
    description: 'Poached eggs over a croissant with creamed.',
    price: '4.25',
    discount: '-25% Off',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Greek Eggs',
    description: 'Poached eggs over a crouton with oregano greek.',
    price: '3.50',
    discount: '-20% Off',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=400&auto=format&fit=crop',
  },
];

const tabs = [
  { name: 'home-outline', active: false },
  { name: 'storefront-outline', active: true },
  { name: 'git-network-outline', active: false },
  { name: 'person-outline', active: false },
];

export default function RestaurantMenuScreen({ navigation }) {
  const [activeCategory, setActiveCategory] = useState('Trending Picks 🔥');

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {/* ── Top bar ── */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={0.8}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="arrow-back" size={20} color={Colors.dark} />
        </TouchableOpacity>

        <View style={styles.topBarActions}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
            <Ionicons name="heart" size={20} color={Colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconButton, styles.iconButtonSpaced]}
            activeOpacity={0.8}
          >
            <Ionicons name="search" size={20} color={Colors.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Store card ── */}
        <View style={styles.storeCard}>
          <View style={styles.storeRow}>
            <View style={styles.storeLogoWrap}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&auto=format&fit=crop',
                }}
                style={styles.storeLogo}
                resizeMode="cover"
              />
            </View>

            <View style={styles.storeInfo}>
              <Text style={styles.storeDeliveredBy}>Delivered by talabat</Text>
              <Text style={styles.storeName}>Bartone</Text>
              <Text style={styles.storeCategories} numberOfLines={1}>
                Healthy, Cafe, Breakfast, Coffee
              </Text>

              <View style={styles.storeMetaRow}>
                <Ionicons
                  name="time-outline"
                  size={11}
                  color="#666"
                  style={styles.metaIcon}
                />
                <Text style={styles.metaText}>25-60 mins</Text>
                <Text style={styles.metaDot}>•</Text>
                <Ionicons
                  name="bicycle-outline"
                  size={11}
                  color="#666"
                  style={styles.metaIcon}
                />
                <Text style={styles.metaText}>Free</Text>
              </View>
            </View>
          </View>

          {/* Rating badge */}
          <View style={styles.ratingBadge}>
            <Ionicons
              name="star"
              size={10}
              color={Colors.primary}
              style={{ marginRight: 3 }}
            />
            <Text style={styles.ratingText}>4.9</Text>
          </View>

          {/* Promo pill */}
          <View style={styles.promoPill}>
            <Text style={styles.promoEmoji}>🚚</Text>
            <Text style={styles.promoText}>
              Get your first 4 orders delivered free
            </Text>
          </View>
        </View>

        {/* ── Category tabs ── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContent}
          style={styles.tabsScroll}
        >
          <TouchableOpacity
            style={styles.filterButton}
            activeOpacity={0.85}
          >
            <Ionicons name="options" size={18} color="#FFFFFF" />
          </TouchableOpacity>

          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <TouchableOpacity
                key={cat.id}
                onPress={() => setActiveCategory(cat.name)}
                activeOpacity={0.85}
                style={[
                  styles.tabChip,
                  isActive ? styles.tabChipActive : styles.tabChipInactive,
                ]}
              >
                <Text
                  style={[
                    styles.tabChipText,
                    isActive && styles.tabChipTextActive,
                  ]}
                >
                  {cat.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* ── Section header ── */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Picks for you 🔥</Text>
          <Text style={styles.sectionSubtitle}>
            Trending items we think you'll love
          </Text>
        </View>

        {/* ── 2-column grid ── */}
        <View style={styles.grid}>
          {menuItems.map((item) => (
            <View key={item.id} style={styles.gridItem}>
              <View style={styles.menuCard}>
                <View style={styles.menuImageWrap}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.menuImage}
                    resizeMode="cover"
                  />
                  <View style={styles.discountBadge}>
                    <Text style={styles.discountText}>{item.discount}</Text>
                  </View>
                </View>

                <Text style={styles.menuName} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.menuDescription} numberOfLines={1}>
                  {item.description}
                </Text>

                <View style={styles.menuBottomRow}>
                  <Text style={styles.menuPrice}>
                    <Text style={styles.menuPriceCurrency}>$</Text>
                    {item.price}
                  </Text>
                  <TouchableOpacity
                    style={styles.addButton}
                    activeOpacity={0.85}
                  >
                    <Ionicons name="add" size={18} color="#FFFFFF" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ── Floating tab bar ── */}
      <SafeAreaView style={styles.tabBarSafeArea} edges={['bottom']}>
        <View style={styles.tabBar}>
          {tabs.map((tab, i) => {
            const isCenter = i === 1;
            return (
              <TouchableOpacity
                key={tab.name}
                activeOpacity={0.85}
                style={[
                  isCenter ? styles.tabCenter : styles.tabItem,
                  isCenter && styles.tabItemCenterSpaced,
                ]}
              >
                <Ionicons
                  name={tab.name}
                  size={20}
                  color={tab.active ? '#FFFFFF' : '#999999'}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
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
    paddingBottom: 140, // clears the floating tab bar
  },

  // ── Top bar ──
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.sm + 2,
  },
  topBarActions: {
    flexDirection: 'row',
    alignItems: 'center',
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

  // ── Store card ──
  storeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl * 1.6,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    marginBottom: Spacing.md,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  storeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storeLogoWrap: {
    width: 80,
    height: 80,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    marginRight: Spacing.sm + 2,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: '#F0F0F2',
  },
  storeLogo: {
    width: '100%',
    height: '100%',
  },
  storeInfo: {
    flex: 1,
    paddingRight: Spacing.xl, // leaves space for the absolute rating badge
  },
  storeDeliveredBy: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    marginBottom: 2,
  },
  storeName: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: 2,
  },
  storeCategories: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    marginBottom: Spacing.xs + 2,
  },
  storeMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaIcon: {
    marginRight: 3,
  },
  metaText: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoRegular,
    color: '#666',
  },
  metaDot: {
    fontSize: FontSize.xs - 1,
    color: '#D4D4D8',
    marginHorizontal: Spacing.xs,
  },
  ratingBadge: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.dark,
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xs - 1,
    borderRadius: Radius.xl * 2,
  },
  ratingText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
  promoPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(245, 89, 5, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(245, 89, 5, 0.2)',
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs + 2,
    marginTop: Spacing.sm + 2,
  },
  promoEmoji: {
    fontSize: FontSize.xs,
    marginRight: Spacing.xs,
  },
  promoText: {
    flex: 1,
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.primary,
  },

  // ── Category tabs ──
  tabsScroll: {
    marginBottom: Spacing.md,
  },
  tabsContent: {
    paddingRight: Spacing.md,
    alignItems: 'center',
  },
  filterButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm,
  },
  tabChip: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    borderRadius: Radius.xl * 2,
    marginRight: Spacing.sm,
    borderWidth: 1,
  },
  tabChipActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabChipInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8EC',
  },
  tabChipText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  tabChipTextActive: {
    color: '#FFFFFF',
  },

  // ── Section header ──
  sectionHeader: {
    marginBottom: Spacing.sm + 2,
  },
  sectionTitle: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  sectionSubtitle: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    marginTop: 2,
  },

  // ── Grid ──
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: CARD_WIDTH,
    marginBottom: CARD_GAP,
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl * 1.4,
    padding: Spacing.sm + 2,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
    flex: 1,
  },
  menuImageWrap: {
    width: '100%',
    height: 128,
    borderRadius: Radius.md,
    overflow: 'hidden',
    marginBottom: Spacing.sm,
    backgroundColor: Colors.background,
    position: 'relative',
  },
  menuImage: {
    width: '100%',
    height: '100%',
  },
  discountBadge: {
    position: 'absolute',
    bottom: Spacing.xs,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingHorizontal: Spacing.sm,
    paddingVertical: 2,
    borderRadius: Radius.xl * 2,
  },
  discountText: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
  menuName: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: 2,
  },
  menuDescription: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    marginBottom: Spacing.sm,
  },
  menuBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuPrice: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  menuPriceCurrency: {
    fontSize: FontSize.xs,
    color: Colors.primary,
  },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },

  // ── Floating tab bar ──
  tabBarSafeArea: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingBottom: Spacing.sm,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.dark,
    borderRadius: Radius.xl * 3,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xs,
    width: width * 0.75,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  tabItem: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabCenter: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  tabItemCenterSpaced: {
    marginHorizontal: Spacing.xs,
  },
});