import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Fonts } from '../../components/constants/fonts/font';
import { Colors } from '../../components/constants/color/color';
import {
  FontSize,
  Spacing,
  Radius,
} from '../../components/constants/responsive/responsive';

const { width, height } = Dimensions.get('window');

export default function HeroStartScreen({ onStartPress }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        {/* ── Pin badge ── */}
        <SafeAreaView style={styles.safeArea} edges={['top']} pointerEvents="none">
          <View style={styles.pinContainer}>
            <View style={styles.pinBadge}>
              <Text style={styles.pinText}>Fresh Beef</Text>
            </View>
            <View style={styles.pinDot} />
          </View>
        </SafeAreaView>

        {/* ── Bottom gradient overlay ── */}
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.65)', '#FFFFFF', '#FFFFFF']}
          locations={[0, 0.4, 0.65, 1]}
          style={styles.gradient}
        >
          <SafeAreaView edges={['bottom']} style={styles.bottomSafe}>
            <View style={styles.content}>
              <Text style={styles.title}>
                Exceptional Food,{'\n'}Delivered Fresh
              </Text>

              <Text style={styles.subtitle}>
                Experience gourmet-quality meals prepared with care and
                delivered faster than ever — straight to your doorstep.
              </Text>

              {/* Action bar */}
              <View style={styles.actionBar}>
                <View style={styles.actionIconCircle}>
                  <MaterialCommunityIcons
                    name="food-turkey"
                    size={20}
                    color={Colors.dark}
                  />
                </View>

                <TouchableOpacity
                  onPress={onStartPress}
                  style={styles.actionButton}
                  activeOpacity={0.85}
                >
                  <View style={styles.cartButton}>
                    <Ionicons name="cart-outline" size={20} color="#FFFFFF" />
                  </View>

                  <Text style={styles.startText}>Start</Text>

                  <View style={styles.chevrons}>
                    <Ionicons
                      name="chevron-forward"
                      size={14}
                      color="#8E8E93"
                    />
                    <Ionicons
                      name="chevron-forward"
                      size={14}
                      color="#8E8E93"
                      style={styles.chevronOverlap}
                    />
                    <Ionicons
                      name="chevron-forward"
                      size={14}
                      color="#8E8E93"
                      style={styles.chevronOverlap}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width,
    justifyContent: 'space-between',
  },

  // ── Pin ──
  safeArea: {
    flex: 1,
    position: 'relative',
  },
  pinContainer: {
    position: 'absolute',
    top: '44%',
    left: '38%',
    alignItems: 'center',
  },
  pinBadge: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    borderRadius: Radius.xl * 2,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 6,
  },
  pinText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  pinDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    marginTop: 4,
  },

  // ── Gradient overlay ──
  gradient: {
    width,
    height: height * 0.55,
    justifyContent: 'flex-end',
  },
  bottomSafe: {
    width: '100%',
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: FontSize.xxl,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    lineHeight: FontSize.xxl * 1.28,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#666',
    lineHeight: FontSize.xs * 1.6,
    marginBottom: Spacing.xl,
  },

  // ── Action bar ──
  actionBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(229,229,234,0.8)',
    borderRadius: Radius.xl * 2,
    padding: Spacing.xs,
    borderWidth: 1,
    borderColor: 'rgba(200,200,210,0.5)',
  },
  actionIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(200,200,210,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: Spacing.xs,
    paddingRight: Spacing.md,
  },
  cartButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  startText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  chevrons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chevronOverlap: {
    marginLeft: -6,
  },
});