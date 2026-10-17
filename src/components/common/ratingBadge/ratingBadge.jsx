import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/color/color';
import { FontSize, Spacing, Radius } from '../../constants/responsive/responsive';
import { Fonts } from '../../constants/fonts/font';
import { StyleSheet } from 'react-native';

export default function RatingBadge({ rating, style }) {
  return (
    <View style={[styles.ratingBadge, style]}>
        <Ionicons
          name="star"
          size={10}
          color="#F59E0B"
          style={styles.ratingStar}
        />
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
  )
}



const styles = StyleSheet.create({

  ratingBadge: {
    position: 'absolute',
    top: Spacing.sm + 2,
    right: Spacing.sm + 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.sm-2,
    borderRadius: Radius.xl * 2,
    backgroundColor: Colors.dark,
  },
  ratingStar: {
    marginRight: 3,
  },
  ratingText: {
    fontSize: FontSize.xs,
    fontFamily: Fonts.LatoBold,
    color: '#FFFFFF',
  },
});