import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Fonts } from '../../components/constants/fonts/font';
import {
  FontSize,
  Spacing,
} from '../../components/constants/responsive/responsive';
import Button from '../../components/common/button/button';

export default function Welcome() {
  const handleApple = () => console.log('Apple sign-in pressed');
  const handleGoogle = () => console.log('Google sign-in pressed');
  const handleEmail = () => console.log('Email sign-in pressed');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1000&auto=format&fit=crop',
        }}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.7)', '#FFFFFF', '#FFFFFF']}
          locations={[0, 0.35, 0.55, 1]}
          style={styles.gradient}
        >
          <SafeAreaView edges={['bottom']} style={styles.safeArea}>
            <View style={styles.content}>
              <Text style={styles.title}>Welcome to Cravk</Text>
              <Text style={styles.subtitle}>
                Order your favorite meals easily and enjoy fast, fresh delivery —
                simple and convenient.
              </Text>

              {/* Primary — Apple */}
              <View style={styles.fullRow}>
                <Button
                  title="Continue with Apple"
                  leftIcon={
                    <Ionicons name="logo-apple" size={20} color="#FFF" />
                  }
                  onPress={handleApple}
                />
              </View>

              <View style={styles.row}>
                <View style={styles.rowItem}>
                  <Button
                    title="Google"
                    variant="light"
                    fullWidth
                    leftIcon={
                      <Ionicons name="logo-google" size={18} color="#DB4437" />
                    }
                    onPress={handleGoogle}
                  />
                </View>

                <View style={styles.rowItem}>
                  <Button
                    title="Email"
                    variant="light"
                    fullWidth
                    leftIcon={
                      <MaterialCommunityIcons
                        name="email-outline"
                        size={18}
                        color="#111"
                      />
                    }
                    onPress={handleEmail}
                  />
                </View>
              </View>

              <Text style={styles.terms}>
                By signing in to this app you agree with our{' '}
                <Text style={styles.termsLink}>Terms of Use</Text> and{' '}
                <Text style={styles.termsLink}>Privacy Policy</Text>.
              </Text>
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
  },
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  gradient: {
    width: '100%',
    height: '65%',
    justifyContent: 'flex-end',
  },
  safeArea: {
    width: '100%',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
  },

  // ── Typography ──
  title: {
    fontSize: FontSize.xxl,
    fontFamily: Fonts.LatoBold,
    color: '#111',
    textAlign: 'center',
    marginBottom: Spacing.sm,
    lineHeight: FontSize.xxl * 1.28,
  },
  subtitle: {
    fontSize: FontSize.sm,
    fontFamily: Fonts.LatoRegular,
    color: '#666',
    textAlign: 'center',
    marginBottom: Spacing.lg,
    paddingHorizontal: Spacing.md,
    lineHeight: FontSize.sm * 1.6,
  },

   
  fullRow: {
    width: '100%',
    marginBottom: Spacing.sm,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: Spacing.lg,
  },
  rowItem: {
      flex: 1,
        marginHorizontal: Spacing.xs,
  },

  
  terms: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoRegular,
    color: '#9A9AA0',
    textAlign: 'center',
    paddingHorizontal: Spacing.md,
    lineHeight: FontSize.xs * 1.5,
  },
  termsLink: {
    color: '#555',
    textDecorationLine: 'underline',
    fontFamily: Fonts.LatoBold,
  },
});