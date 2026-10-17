import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Responsive, Spacing } from '../../constants/responsive/responsive';
import Ionicons  from 'react-native-vector-icons/Ionicons';

export default function SectionHeader({
  title,
  actionLabel = 'See all',
  onActionPress,
  showAction = true,
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
      {showAction && (
        <TouchableOpacity style={styles.btn} onPress={onActionPress} activeOpacity={0.7}>
          <Text style={styles.action}>
            {actionLabel} 
                  </Text>
                  <Ionicons name="chevron-forward" size={Responsive.RFValue(16)} color="#9A9AA0" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.sm + 2,
  },
  title: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  action: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
},
    btn: {
        flexDirection: 'row', alignItems: 'center',
        gap:Spacing.xs
  }
});