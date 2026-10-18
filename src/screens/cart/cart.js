import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { Fonts } from '../../components/constants/fonts/font';
import { Colors } from '../../components/constants/color/color';
import {
  FontSize,
  Spacing,
  Radius,
} from '../../components/constants/responsive/responsive';

const initialCartItems = [
  {
    id: '1',
    name: 'Grilled chicken breast',
    description: 'Tender grilled chicken breast seasoned.',
    price: 3.97,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Crunchy Taco Supreme',
    description:
      'A crispy, flavor-packed Crunchy Taco Supreme loaded with seasoned filling',
    price: 4.0,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=400&auto=format&fit=crop',
    showDelete: true,
  },
  {
    id: '3',
    name: 'El Combo',
    description:
      'Regular, Grilled Chicken Quesadilla, Nacho & Cheese, Pepsi Zero',
    price: 6.5,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Guaco Griller Meal',
    description:
      'A flavorful Guaco Griller Meal loaded with juicy grilled chicken, fresh toppings.',
    price: 3.5,
    quantity: 1,
    image:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=400&auto=format&fit=crop',
  },
];

export default function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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

        <Text style={styles.screenTitle}>Cart</Text>

        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Feather name="search" size={18} color={Colors.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Cart items ── */}
        {cartItems.map((item) => (
          <View key={item.id} style={styles.itemRow}>
            <View style={styles.itemCard}>
              <View style={styles.itemLeft}>
                <View style={styles.itemImageWrap}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.itemImage}
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.itemInfo}>
                  <View style={styles.itemTitleRow}>
                    <Text style={styles.itemName} numberOfLines={1}>
                      {item.name}
                    </Text>
                    <TouchableOpacity activeOpacity={0.6}>
                      <Ionicons
                        name="ellipsis-horizontal"
                        size={16}
                        color="#8E8E93"
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.itemDescription} numberOfLines={2}>
                    {item.description}
                  </Text>

                  <Text style={styles.itemPrice}>
                    <Text style={styles.itemPriceCurrency}>$</Text>
                    {item.price.toFixed(2)}
                  </Text>
                </View>
              </View>

              {/* Quantity stepper */}
              <View style={styles.stepper}>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, -1)}
                  style={styles.stepperButton}
                  activeOpacity={0.7}
                >
                  <Ionicons name="remove" size={14} color={Colors.dark} />
                </TouchableOpacity>

                <Text style={styles.stepperValue}>{item.quantity}</Text>

                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, 1)}
                  style={[styles.stepperButton, styles.stepperButtonPrimary]}
                  activeOpacity={0.7}
                >
                  <Ionicons name="add" size={14} color="#FFFFFF" />
                </TouchableOpacity>
              </View>
            </View>

            {item.showDelete && (
              <TouchableOpacity
                onPress={() => removeItem(item.id)}
                style={styles.deleteButton}
                activeOpacity={0.8}
              >
                <Feather name="trash-2" size={20} color="#EF4444" />
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* ── Promo code ── */}
        <View style={styles.promoRow}>
          <TextInput
            placeholder="Promo code"
            placeholderTextColor="#9A9AA0"
            value={promoCode}
            onChangeText={setPromoCode}
            style={styles.promoInput}
          />
          <TouchableOpacity style={styles.promoApplyButton} activeOpacity={0.85}>
            <Text style={styles.promoApplyText}>Apply</Text>
          </TouchableOpacity>
        </View>

        {/* ── Order summary ── */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotals for products:</Text>
            <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          </View>

          <View style={[styles.summaryRow, styles.summaryRowSpaced]}>
            <Text style={styles.summaryLabel}>Delivery shipping:</Text>
            <Text style={styles.summaryValue}>Free</Text>
          </View>

          <View style={styles.divider} />

          <View style={[styles.summaryRow, styles.summaryTotalRow]}>
            <Text style={styles.summaryTotalLabel}>Total</Text>
            <Text style={styles.summaryTotalValue}>${subtotal.toFixed(2)}</Text>
          </View>

          <TouchableOpacity
            style={styles.checkoutButton}
            activeOpacity={0.85}
          >
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
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

  // ── Top bar ──
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.sm,
    paddingBottom: Spacing.sm + 2,
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
  screenTitle: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },

  // ── Cart item ──
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  itemCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl * 1.6,
    padding: Spacing.sm + 2,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: Spacing.xs,
  },
  itemImageWrap: {
    width: 80,
    height: 80,
    borderRadius: Radius.lg,
    overflow: 'hidden',
    marginRight: Spacing.sm + 2,
    backgroundColor: Colors.background,
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    flex: 1,
  },
  itemTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemName: {
    flex: 1,
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginRight: 4,
  },
  itemDescription: {
    fontSize: FontSize.xs - 1,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    marginBottom: Spacing.xs,
  },
  itemPrice: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.primary,
  },
  itemPriceCurrency: {
    fontSize: FontSize.xs,
  },

  // ── Stepper ──
  stepper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: Radius.xl * 2,
    padding: Spacing.xs - 1,
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  stepperButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepperButtonPrimary: {
    backgroundColor: Colors.dark,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  stepperValue: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    paddingHorizontal: Spacing.xs + 2,
    minWidth: 20,
    textAlign: 'center',
  },

  // ── Delete ──
  deleteButton: {
    width: 56,
    height: 96,
    backgroundColor: Colors.background,
    borderRadius: Radius.lg,
    marginLeft: Spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },

  // ── Promo ──
  promoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl * 2,
    padding: Spacing.xs,
    paddingLeft: Spacing.md,
    borderWidth: 1,
    borderColor: '#F0F0F2',
    marginBottom: Spacing.md,
    marginTop: Spacing.sm,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  promoInput: {
    flex: 1,
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoRegular,
    color: Colors.dark,
    paddingRight: Spacing.xs,
  },
  promoApplyButton: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.sm + 2,
    backgroundColor: Colors.dark,
    borderRadius: Radius.xl * 2,
  },
  promoApplyText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },

  // ── Summary ──
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F2',
    borderRadius: Radius.xl * 1.6,
    padding: Spacing.md + 2,
    marginBottom: Spacing.lg,
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: Spacing.sm + 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryRowSpaced: {
    marginBottom: Spacing.md,
  },
  summaryLabel: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },
  summaryValue: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#F0F0F2',
    marginBottom: Spacing.md,
  },
  summaryTotalRow: {
    marginBottom: Spacing.md,
  },
  summaryTotalLabel: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  summaryTotalValue: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  checkoutButton: {
    width: '100%',
    height: 56,
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
  checkoutText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
});