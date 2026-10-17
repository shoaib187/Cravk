import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/static/home/header';
import SearchBar from '../../components/static/home/searchBar';
import SectionHeader from '../../components/static/home/sectionHeader';
import CategoryChip from '../../components/common/categoryChip/categoryChip';
import FeaturedCard from '../../components/static/home/featuredCard';
import RestaurantCard from '../../components/common/restaurantCard/restaurantCard';
import { Colors } from '../../components/constants/color/color';
import { FontSize, Spacing } from '../../components/constants/responsive/responsive';
import { Fonts } from '../../components/constants/fonts/font';
import BrandsSection from '../../components/static/home/brandsSection';



const categories = [
  { id: '1', name: 'Food', icon: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200&auto=format&fit=crop' },
  { id: '2', name: 'Groceries', icon: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=200&auto=format&fit=crop' },
  { id: '3', name: 'Stores', icon: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=200&auto=format&fit=crop' },
];

const featuredItems = [
  {
    id: '1',
    title: 'Grilled',
    titleMuted: 'Chicken',
    subtitle: 'Breast',
    time: '22 mins',
    price: '3.97',
    offerValue: '25% Off Prices',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=400&auto=format&fit=crop',
    isFreeDelivery: true,
  },
  {
    id: '2',
    title: 'Spaghetti',
    subtitle: 'meat sa...',
    time: '35 mins',
    price: '2.50',
    offerValue: '50% Off',
    image: 'https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?q=80&w=400&auto=format&fit=crop',
  },
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

export default function Home() {
    const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Food');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header
          address="89 Street, Mirqab"
          onAddressPress={() => {}}
          onNotificationPress={() => {}}
          onCartPress={() => {}}
        />

        <View style={styles.headingWrap}>
          <Text style={styles.heading}>
            What's <Text style={styles.headingMuted}>Your Craving</Text> Today?{' '}
            <Text style={styles.headingEmoji}>🌶️</Text>
          </Text>
        </View>

        <SearchBar value={search} onChangeText={setSearch} />

        {/* Categories */}
        <View style={styles.section}>
          <SectionHeader title="Category" onActionPress={() => {}} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalListContent}
          >
            {categories.map((cat) => (
              <CategoryChip
                key={cat.id}
                item={cat}
                isActive={activeCategory === cat.name}
                onPress={() => setActiveCategory(cat.name)}
              />
            ))}
          </ScrollView>
        </View>

        {/* Featured cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalListContent}
          style={styles.featuredScroll}
        >
          {featuredItems.map((item) => (
            <FeaturedCard
              key={item.id}
              {...item}
              onAddPress={() => {}}
              onPress={() => {}}
            />
          ))}
        </ScrollView>

        {/* Big brands */}
        <View style={styles.section}>
          <SectionHeader title="Big brands near you" onActionPress={() => { }} />
          <BrandsSection  />
        </View>

        <View style={styles.section}>
          <SectionHeader
            title="Featured Restaurants"
            showAction={false}
          />
          {restaurants.map((r) => (
            <RestaurantCard
              key={r.id}
              {...r}
              onPress={() => console.log(`Pressed ${r.name}`)}
            />
          ))}
        </View>
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
  headingWrap: {
    marginBottom: Spacing.lg,
  },
  heading: {
    fontSize: FontSize.xxl,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    lineHeight: FontSize.xxl * 1.2,
  },
  headingMuted: {
    color: '#D4D4D8',
  },
  headingEmoji: {
    fontSize: FontSize.lg,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  horizontalListContent: {
    paddingRight: Spacing.md,
  },
  featuredScroll: {
    marginBottom: Spacing.lg,
    marginHorizontal: -Spacing.md,
    paddingLeft: Spacing.md,
  },
});