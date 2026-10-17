import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Button from '../../components/common/button/button';
import { Fonts } from '../../components/constants/fonts/font';
import {
  FontSize,
  Spacing,
  Radius,
} from '../../components/constants/responsive/responsive';

const locations = [
  { id: '1', name: 'Kuwait', flag: '🇰🇼' },
  { id: '2', name: 'New York', flag: '🇺🇸', selected: true },
  { id: '3', name: 'India', flag: '🇮🇳' },
  { id: '4', name: 'Malaysia', flag: '🇲🇾' },
  { id: '5', name: 'Oman', flag: '🇴🇲' },
  { id: '6', name: 'Singapore', flag: '🇸🇬' },
];

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = useState('New York');

  return (
    <View style={styles.container} edges={['top', 'bottom']}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.banner}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop',
          }}
          style={styles.bannerImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', '#FFFFFF']}
          locations={[0, 1]}
          style={styles.bannerFade}
          pointerEvents="none"
        />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.topSection}>
          {/* Header */}
          <Text style={styles.title}>Where are we delivering to?</Text>
          <Text style={styles.subtitle}>
            Tell us your location so we can show restaurants near you.
          </Text>

          {/* Current Location Card */}
          <View style={styles.currentCard}>
            <View>
              <Text style={styles.currentLabel}>Current</Text>
              <Text style={styles.currentValue}>New York, NY</Text>
            </View>
            <Ionicons name="location-outline" size={20} color="#111" />
          </View>

          {/* Location List */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.listScroll}
            contentContainerStyle={styles.listContent}
          >
            {locations.map((item) => {
              const isSelected = selectedLocation === item.name;
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setSelectedLocation(item.name)}
                  activeOpacity={0.7}
                  style={[
                    styles.locationItem,
                    isSelected ? styles.locationItemSelected : styles.locationItemDefault,
                  ]}
                >
                  <Text style={styles.flag}>{item.flag}</Text>
                  <Text style={styles.locationName}>{item.name}</Text>
                  {isSelected && (
                    <View style={styles.checkWrap}>
                      <Ionicons name="checkmark" size={16} color="#fff" />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Continue */}
        <Button title="Continue" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // ── Banner ──
  banner: {
    height: 176,
    width: '100%',
    position: 'relative',
    backgroundColor: '#F4F4F6',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  bannerFade: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 32,
  },

  // ── Content layout ──
  content: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.lg,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 1,
  },

  // ── Header ──
  title: {
    fontSize: FontSize.xl,
    fontFamily: Fonts.LatoBold,
    color: '#111',
    marginBottom: Spacing.xs,
    lineHeight: FontSize.xl * 1.25,
  },
  subtitle: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoRegular,
    color: '#8A8A90',
    marginBottom: Spacing.md + 2,
    lineHeight: FontSize.sm * 1.5,
  },

  // ── Current location card ──
  currentCard: {
    backgroundColor: '#F4F4F6',
    borderRadius: Radius.xl*2,
      paddingHorizontal: Spacing.md,
    paddingVertical:Spacing.sm,
    marginBottom: Spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  currentLabel: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#9A9AA0',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
      marginBottom: 2,
    borderRadius: Radius.xl*2,
  },
  currentValue: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: '#111',
  },

  // ── Location list ──
  listScroll: {
    flex: 1,
    marginTop: Spacing.sm,
  },
  listContent: {
    paddingBottom: Spacing.sm,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm + 2,
    paddingHorizontal: Spacing.md,
    marginBottom: Spacing.xs + 2,
borderRadius: Radius.xl*2,
  },
  locationItemDefault: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F0F0F2',
  },
  locationItemSelected: {
    backgroundColor: '#F8F8FA',
    borderColor: '#D9D9DE',
  },
  flag: {
    fontSize: 20,
    marginRight: Spacing.sm + 2,
  },
  locationName: {
    flex: 1,
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoRegular,
    color: '#1A1A1A',
  },
  checkWrap: {
    width: 24,
    height: 24,
    borderRadius: Radius.xl*2,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#E0E0E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});