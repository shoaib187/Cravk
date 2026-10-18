import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Spacing, Radius, Responsive, FontSize } from '../../constants/responsive/responsive';
import { Colors } from '../../constants/color/color';
import { Fonts } from '../../constants/fonts/font';

export default function BottomAction() {
  return (
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
  )
}



const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md + 2,
  },
  addToCartButton: {
    flex: 1,
    height: Responsive.RFValue(46),
    backgroundColor: Colors.white,
    borderRadius: Radius.xl * 2,
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
height: Responsive.RFValue(46),
    backgroundColor: Colors.dark,
    borderRadius: Radius.xl * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
});