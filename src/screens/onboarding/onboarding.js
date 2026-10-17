import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ImageBackground,
  StatusBar,
  Animated,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/common/button/button';

import { Fonts } from '../../components/constants/fonts/font';
import {
  FontSize,
  Spacing,
  ImageStyle,
  Radius,
  Responsive,
} from '../../components/constants/responsive/responsive';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: { uri: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop' },
    title: 'Craft Your Own\nCulinary Experience',
    subtitle: 'Choose fresh ingredients curated just for you.',
    pins: [
      { label: 'Fresh Spinach', top: '42%', left: '28%' },
      { label: 'Boiled Beef', top: '48%', left: '68%' },
    ],
  },
  {
    id: '2',
    image: { uri: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1000&auto=format&fit=crop' },
    title: 'Ultra-Fast Delivery\nYou Can Trust',
    subtitle: 'A seamless journey from kitchen to doorstep.',
    pins: [{ label: 'Delivery Location', top: '24%', left: '48%' }],
  },
  {
    id: '3',
    image: { uri: 'https://images.unsplash.com/photo-1604605801370-3396f9bd9cf0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' },
    title: 'Exceptional Food,\nDelivered Effortlessly',
    subtitle: 'Premium meals, wherever you are.',
    pins: [{ label: 'Final Delivered', top: '25%', left: '72%' }],
  },
];

// ── Animated pagination dots ──
const Indicator = ({ scrollX }) => {
  return (
    <View style={styles.indicatorWrapper}>
      {slides.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [ImageStyle.width / 4, ImageStyle.width / 2, ImageStyle.width / 4],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
 
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    
    }, 2000);
  };

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false, // can't use native driver for width interpolation
      listener: (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / width);
        setCurrentIndex(index);
      },
    }
  );

  const isLastSlide = currentIndex === slides.length - 1;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        keyExtractor={(item) => item.id}
        bounces={false}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.image}
            style={styles.slideImage}
            resizeMode="cover"
          >
            <SafeAreaView style={styles.safeArea} edges={['top']}>
             {item.pins?.map((pin, idx) => (
  <View
    key={idx}
    style={[styles.pinContainer, { top: pin.top, left: pin.left }]}
  >
   
    <View
      style={styles.pinBadge}
    >
      <Text style={styles.pinText}>{pin.label}</Text>
    </View>
  </View>
))}
            </SafeAreaView>

            <LinearGradient
              colors={['transparent', 'rgba(255,255,255,0.7)', '#FFFFFF', '#FFFFFF']}
              locations={[0, 0.45, 0.65, 1]}
              style={styles.gradientOverlay}
            >
              <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        )}
      />

     
      <View style={styles.footer} pointerEvents="box-none">
        <Indicator scrollX={scrollX} />
        <Button
          title={isLastSlide ? 'Get Started' : 'Continue'}
          loading={isLoading}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  slideImage: {
    width,
    height, // ✅ restore height so the ImageBackground fills the screen
    justifyContent: 'space-between',
  },
  safeArea: {
    flex: 1,
    position: 'relative',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    width,
    height: height * 0.55,
    justifyContent: 'flex-end',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl + 120, // ✅ leave room for footer
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: FontSize.xxl,
    fontFamily: Fonts.LatoBold,
    color: '#111',
    textAlign: 'center',
    marginBottom: Spacing.sm,
    lineHeight: FontSize.xxl * 1.28,
  },
  subtitle: {
    fontSize: FontSize.md,
    color: '#666',
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },

  // ── Footer (dots + button) ──
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  dot: {
    height: 8,
    borderRadius: Radius.xl,
    marginHorizontal: Spacing.xs / 2,
    backgroundColor: '#000',
  },
  pinContainer: {
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
},
pinDot: {
  width: 8,
  height: 8,
  borderRadius: 4,
  backgroundColor: '#FFFFFF',
  borderWidth: 1.5,
  borderColor: 'rgba(0,0,0,0.08)',
  marginBottom: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 4,
},
pinBadge: {
  backgroundColor: '#FFFFFF80',
  paddingHorizontal: Spacing.md,
  paddingVertical: Spacing.sm,
  borderRadius: Radius.xl,
  borderWidth: 1,
  borderColor: '#ffffff90',
  overflow: 'hidden',
},
pinText: {
  color: '#111111',
  fontSize: FontSize.xs,
  fontFamily: Fonts.LatoBold,
  letterSpacing: 0.6,
  textTransform: 'uppercase',
  includeFontPadding: false,
},
pinHighlight: {
  position: 'absolute',
  top: 0,
  left: 8,
  right: 8,
  height: 1,
  backgroundColor: 'rgba(255,255,255,0.9)',
  borderRadius: 1,
},
});