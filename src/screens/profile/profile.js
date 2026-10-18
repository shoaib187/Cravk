import React from 'react';
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
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Fonts } from '../../components/constants/fonts/font';
import { Colors } from '../../components/constants/color/color';

import {
  FontSize,
  Spacing,
  Radius,
  Responsive,
} from '../../components/constants/responsive/responsive';

const { width } = Dimensions.get('window');

const accountItems = [
  { id: '1', title: 'Rewards', value: '0 points', icon: 'trophy-outline' },
  { id: '2', title: 'Your orders', hasChevron: true, icon: 'clipboard-outline' },
  { id: '3', title: 'Cravk pay', value: '$0.00', icon: 'card-outline' },
  { id: '4', title: 'Vouchers', hasChevron: true, icon: 'ticket-outline' },
  { id: '5', title: 'Cravk pro', hasChevron: true, icon: 'ribbon-outline' },
];

const supportItems = [
  { id: '1', title: 'Get help', hasChevron: true, icon: 'help-circle-outline' },
  { id: '2', title: 'About app', hasChevron: true, icon: 'information-circle-outline' },
];

// ── Reusable row ──
const MenuRow = ({ item, isLast, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.menuRow, !isLast && styles.menuRowBorder]}
  >
    <View style={styles.menuLeft}>
      <View style={styles.menuIconCircle}>
        <Ionicons name={item.icon} size={16} color={Colors.dark} />
      </View>
      <Text style={styles.menuTitle}>{item.title}</Text>
    </View>

    {item.value ? (
      <Text style={styles.menuValue}>{item.value}</Text>
    ) : (
      <Ionicons name="chevron-forward" size={16} color="#8E8E93" />
    )}
  </TouchableOpacity>
);

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="dark-content" />

      {/* ── Top bar ── */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Ionicons name="person" size={18} color={Colors.dark} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Profile</Text>

        <TouchableOpacity style={styles.iconButton} activeOpacity={0.8}>
          <Ionicons name="notifications" size={18} color={Colors.dark} />
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* ── Profile card ── */}
        <View style={styles.profileCard}>
          <View style={styles.profileLeft}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
              }}
              style={styles.avatar}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Mark John</Text>
              <View style={styles.profileLocationRow}>
                <Ionicons
                  name="location-outline"
                  size={12}
                  color="#8E8E93"
                  style={{ marginRight: 3 }}
                />
                <Text style={styles.profileLocation} numberOfLines={1}>
                  745 Lincoln Pl, New York
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.editButton} activeOpacity={0.7}>
            <Feather name="edit-3" size={16} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        {/* ── Account section ── */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Account</Text>
          <View style={styles.menuGroup}>
            {accountItems.map((item, index) => (
              <MenuRow
                key={item.id}
                item={item}
                isLast={index === accountItems.length - 1}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>

        {/* ── Support section ── */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Support</Text>
          <View style={styles.menuGroup}>
            {supportItems.map((item, index) => (
              <MenuRow
                key={item.id}
                item={item}
                isLast={index === supportItems.length - 1}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>

        {/* ── Logout ── */}
        <View style={styles.logoutCard}>
          <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
            <View style={styles.logoutIconCircle}>
              <MaterialCommunityIcons
                name="logout"
                size={18}
                color={Colors.dark}
              />
            </View>
            <Text style={styles.logoutText}>Log out</Text>
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
    paddingBottom: Responsive.RFValue(140),
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
    width: Responsive.RFValue(40),
    height: Responsive.RFValue(40),
    borderRadius: Responsive.RFValue(20),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },

  // ── Profile card ──
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: Spacing.sm + 2,
    backgroundColor: Colors.background,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: FontSize.lg,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: 2,
  },
  profileLocationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileLocation: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    flexShrink: 1,
  },
  editButton: {
    width: Responsive.RFValue(30),
    height: Responsive.RFValue(30),
    borderRadius: Responsive.RFValue(18),
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ── Section cards ──
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: Radius.xl,
    padding: Spacing.sm,
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSize.md,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
    marginBottom: Spacing.sm,
  },
  menuGroup: {
    backgroundColor: Colors.background,
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.xs,
    paddingVertical: Spacing.xs - 1,
  },

  // ── Menu row ──
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.sm + 1,
    paddingHorizontal: Spacing.xs,
  },
  menuRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconCircle: {
    width: Responsive.RFValue(32),
    height: Responsive.RFValue(32),
    borderRadius: Responsive.RFValue(16),
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm + 2,
  },
  menuTitle: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },
  menuValue: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
  },

  // ── Logout ──
  logoutCard: {
    backgroundColor: Colors.white,
    borderRadius: Radius.xl,
    padding: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.sm,
  },
  logoutIconCircle: {
    width: Responsive.RFValue(36),
    height: Responsive.RFValue(36),
    borderRadius: Responsive.RFValue(18),
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.sm + 2,
  },
  logoutText: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoBold,
    color: Colors.dark,
  },

});