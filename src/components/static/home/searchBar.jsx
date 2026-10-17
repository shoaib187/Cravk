import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../../constants/fonts/font';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing, Radius, Responsive } from '../../constants/responsive/responsive';

export default function SearchBar({
  value,
  onChangeText,
  placeholder = 'Search for food or restaurants...',
  onFilterPress,
}) {
  return (
    <View style={styles.row}>
      <View style={styles.searchBox}>
        <Feather
          name="search"
          size={Responsive.RFValue(18)}
          color="#9A9AA0"
          style={styles.searchIcon}
        />
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9A9AA0"
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        style={styles.filterButton}
        activeOpacity={0.85}
        onPress={onFilterPress}
      >
        <Ionicons name="options-outline" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F2',
    borderRadius: Radius.xl * 2,
    paddingHorizontal: Spacing.md,
    height: Responsive.RFValue(40),
    marginRight: Spacing.sm + 2,
  },
  searchIcon: {
    marginRight: Spacing.sm + 2,
  },
  input: {
    flex: 1,
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoRegular,
    color: Colors.dark,
    paddingVertical: 0,
  },
  filterButton: {
    width:Responsive.RFValue(40),
    height: Responsive.RFValue(40),
    borderRadius: 28,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
});