import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Spacing = {
  xs: wp('1%'), // ≈ 3.75 px
  sm: wp('2%'), // ≈ 7.5 px
  md: wp('4%'), // ≈ 15 px
  lg: wp('6%'), // ≈ 22 px
  xl: wp('8%'), // ≈ 30 px
};

export const FontSize = {
  xs: RFValue(10), // ≈ 10 px
  sm: RFValue(12), // ≈ 12 px
  md: RFValue(14), // ≈ 14 px
  lg: RFValue(18), // ≈ 18 px
  xl: RFValue(22), // ≈ 22 px
  xxl: RFValue(28), // ≈ 28 px
  base: RFValue(12.5),
};

export const Radius = {
  sm: wp('1%'), // ≈ 3.75 px
  md: wp('2%'), // ≈ 7.5 px
  lg: wp('4%'), // ≈ 15 px
  xl: wp('6%'), // ≈ 22 px
};

export const Layout = {
  fullWidth: wp('100%'), // 100% of screen width
  fullHeight: hp('100%'), // 100% of screen height
  halfWidth: wp('50%'), // 50% of screen width
  halfHeight: hp('50%'), // 50% of screen height
};

export const Responsive = {
  wp,
  hp,
  RFValue,
  RFPercentage,
};

export const ImageStyle = {
  width: wp(12),
};
