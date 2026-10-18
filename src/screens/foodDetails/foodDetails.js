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
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { Colors } from '../../components/constants/color/color';
import { Fonts } from '../../components/constants/fonts/font';

import {
  FontSize,
  Spacing,
  Radius,
} from '../../components/constants/responsive/responsive';

const { height } = Dimensions.get('window');

const sizes = ['Small', 'Medium', 'Large', 'Extra large'];

const relatedItems = [
  { id: '1', name: 'Green Salad', image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=200&auto=format&fit=crop' },
  { id: '2', name: 'Fresh Juice', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=200&auto=format&fit=crop' },
  { id: '3', name: 'Avocado Toast', image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=200&auto=format&fit=crop' },
  { id: '4', name: 'Egg Wrap', image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=200&auto=format&fit=crop' },
];

export default function FoodDetailScreen({ navigation }) {
  const [selectedSize, setSelectedSize] = useState('Small');
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Hero image ── */}
        <View style={styles.hero}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop',
            }}
            style={styles.heroImage}
            resizeMode="cover"
          />

          {/* Floating back + favorite */}
          <SafeAreaView style={styles.heroTopBar} edges={['top']}>
            <TouchableOpacity
              style={styles.heroIconButton}
              activeOpacity={0.8}
              onPress={() => navigation?.goBack()}
            >
              <Ionicons name="arrow-back" size={20} color={Colors.dark} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.heroIconButton}
              activeOpacity={0.8}
              onPress={() => setIsFavorite(!isFavorite)}
            >
              <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={20}
                color={isFavorite ? Colors.primary : Colors.dark}
              />
            </TouchableOpacity>
          </SafeAreaView>

          {/* Bottom fade into background */}
          <LinearGradient
            colors={['transparent', Colors.background]}
            style={styles.heroFade}
            pointerEvents="none"
          />
        </View>

        {/* ── Content ── */}
        <View style={styles.content}>
          {/* Title + price */}
          <View style={styles.titleRow}>
            <Text style={styles.title}>Grilled Chicken Breast</Text>
            <Text style={styles.price}>
              <Text style={styles.priceCurrency}>$</Text>3.97
            </Text>
          </View>

          <Text style={styles.subtitle}>
            Tender grilled chicken breast seasoned.
          </Text>

          {/* Rating */}
          <View style={styles.ratingRow}>
            <View style={styles.ratingBadge}>
              <Ionicons
                name="star"
                size={12}
                color="#D97706"
                style={{ marginRight: 3 }}
              />
              <Text style={styles.ratingText}>3.9</Text>
            </View>
            <Text style={styles.ratingCount}>(193+ Review)</Text>
          </View>

          {/* Feature badges */}
          <View style={styles.featureCard}>
            <View style={styles.featureItem}>
              <Ionicons name="bicycle" size={16} color={Colors.dark} style={styles.featureIcon} />
              <Text style={styles.featureText}>Free Delivery</Text>
            </View>
            <View style={styles.featureDivider} />
            <View style={styles.featureItem}>
              <Ionicons name="time-outline" size={16} color={Colors.dark} style={styles.featureIcon} />
              <Text style={styles.featureText}>20-25 min</Text>
            </View>
            <View style={styles.featureDivider} />
            <View style={styles.featureItem}>
              <Ionicons name="flame-outline" size={16} color={Colors.dark} style={styles.featureIcon} />
              <Text style={styles.featureText}>162 Kcal</Text>
            </View>
          </View>

          {/* Sizes */}
          <Text style={styles.sectionTitleSmall}>Try these quick choices</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sizeListContent}
            style={styles.sizeList}
          >
            {sizes.map((size) => {
              const isSelected = selectedSize === size;
              return (
                <TouchableOpacity
                  key={size}
                  onPress={() => setSelectedSize(size)}
                  activeOpacity={0.8}
                  style={[
                    styles.sizeChip,
                    isSelected ? styles.sizeChipActive : styles.sizeChipInactive,
                  ]}
                >
                  <Text
                    style={[
                      styles.sizeChipText,
                      isSelected && styles.sizeChipTextActive,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          {/* Delivery man */}
          <View style={styles.deliveryCard}>
            <View style={styles.deliveryLeft}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
                }}
                style={styles.deliveryAvatar}
              />
              <View>
                <Text style={styles.deliveryName}>Alice Johnson</Text>
                <Text style={styles.deliveryRole}>Deliver man</Text>
              </View>
            </View>

            <View style={styles.deliveryActions}>
              <TouchableOpacity
                style={styles.deliveryActionSecondary}
                activeOpacity={0.8}
              >
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={18}
                  color={Colors.dark}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.deliveryActionPrimary, styles.deliveryActionSpaced]}
                activeOpacity={0.85}
              >
                <Ionicons name="call-outline" size={18} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.sectionTitleSmall}>Description</Text>
          <Text style={styles.description}>
            Premium chicken breast marinated and grilled to perfection. Every
            bite is flavorful, lean, and incredibly tender. Great for anyone who
            loves healthy comfort food{' '}
            <Text style={styles.moreLink}>More...</Text>
          </Text>

          {/* Related */}
          <View style={styles.relatedHeader}>
            <Text style={styles.sectionTitleSmall}>Often order with</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all {'>'}</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.relatedListContent}
          >
            {relatedItems.map((item) => (
              <View key={item.id} style={styles.relatedCard}>
                <View style={styles.relatedImageWrap}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.relatedImage}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.relatedName} numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

      {/* ── Fixed bottom bar ── */}
      <SafeAreaView style={styles.bottomBar} edges={['bottom']}>
        <View style={styles.bottomBarContent}>
          <TouchableOpacity
            style={styles.addToCartButton}
            activeOpacity={0.85}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.orderButton}
            activeOpacity={0.85}
          >
            <Text style={styles.orderText}>Order</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    paddingBottom: 120, // clears the fixed bottom bar
  },

  // ── Hero ──
  hero: {
    width: '100%',
    height: height * 0.33,
    backgroundColor: '#E5E5E5',
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroTopBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.xs,
  },
  heroIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.92)',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  heroFade: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 48,
  },

  // ── Content ──
  content: {
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    flex: 1,
    fontSize: FontSize.xl,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginRight: Spacing.sm,
  },
  price: {
    fontSize: FontSize.xl,
    fontFamily: Fonts.LatoBold,
    color: Colors.primary,
  },
  priceCurrency: {
    fontSize: FontSize.sm,
  },
  subtitle: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    marginBottom: Spacing.sm,
  },

  // ── Rating ──
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: Spacing.xs + 2,
    paddingVertical: 2,
    borderRadius: Radius.sm,
    marginRight: Spacing.xs,
  },
  ratingText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#92400E',
  },
  ratingCount: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },

  // ── Feature card ──
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.lg,
    padding: Spacing.sm + 2,
    marginBottom: Spacing.lg,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  featureIcon: {
    marginRight: 6,
  },
  featureText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  featureDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#EDEDED',
  },

  // ── Section titles ──
  sectionTitleSmall: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: Spacing.xs + 2,
  },

  // ── Sizes ──
  sizeList: {
    marginBottom: Spacing.lg,
  },
  sizeListContent: {
    paddingRight: Spacing.md,
  },
  sizeChip: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: Radius.xl * 2,
    marginRight: Spacing.xs + 2,
    borderWidth: 1,
  },
  sizeChipActive: {
    backgroundColor: Colors.dark,
    borderColor: Colors.dark,
  },
  sizeChipInactive: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E8E8EC',
  },
  sizeChipText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  sizeChipTextActive: {
    color: '#FFFFFF',
  },

  // ── Delivery card ──
  deliveryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F2',
    borderRadius: Radius.lg,
    padding: Spacing.sm + 2,
    marginBottom: Spacing.lg,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  deliveryLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: Spacing.sm + 2,
    backgroundColor: Colors.background,
  },
  deliveryName: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  deliveryRole: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
  deliveryActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryActionSecondary: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F4F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryActionPrimary: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  deliveryActionSpaced: {
    marginLeft: Spacing.sm,
  },

  // ── Description ──
  description: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#666',
    lineHeight: FontSize.xs * 1.6,
    marginBottom: Spacing.lg,
  },
  moreLink: {
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    textDecorationLine: 'underline',
  },

  // ── Related ──
  relatedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  seeAll: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
  relatedListContent: {
    paddingRight: Spacing.md,
  },
  relatedCard: {
    width: 96,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F2',
    borderRadius: Radius.lg,
    padding: Spacing.xs,
    marginRight: Spacing.sm,
    alignItems: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  relatedImageWrap: {
    width: 80,
    height: 80,
    borderRadius: Radius.md,
    overflow: 'hidden',
    marginBottom: Spacing.xs,
    backgroundColor: Colors.background,
  },
  relatedImage: {
    width: '100%',
    height: '100%',
  },
  relatedName: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: Colors.dark,
    textAlign: 'center',
  },

  // ── Bottom bar ──
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F2',
  },
  bottomBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
  },
  addToCartButton: {
    flex: 1,
    height: 52,
    backgroundColor: '#F4F4F6',
    borderRadius: Radius.xl * 2,
    borderWidth: 1,
    borderColor: '#E8E8EC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.sm,
  },
  addToCartText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  orderButton: {
    flex: 1,
    height: 52,
    backgroundColor: Colors.dark,
    borderRadius: Radius.xl * 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  orderText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
});