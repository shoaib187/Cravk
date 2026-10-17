import React from 'react';
import {  ScrollView, SafeAreaView, StatusBar, Text } from 'react-native';
import RestaurantCard from '../../../components/common/RestaurantCard/restaurantCard';
import { Fonts } from '../../../components/constants/fonts/font';

const restaurants = [
  {
    id: '1',
    name: 'Bartone',
    categories: 'Healthy, Cafe, Breakfast, Coffee',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=200&auto=format&fit=crop',
    discount: 'Up to 0.550 KD off',
    time: '25-60 mins',
    rating: '4.9',
  },
  {
    id: '2',
    name: 'Elevation Burger',
    categories: 'Elevation Burger in Kaifan serving fresh',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop',
    logo: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=200&auto=format&fit=crop',
    discount: 'Up to 0.550 KD off',
    time: '15-30 mins',
    rating: '4.3',
  },
];

export default function RestaurantsListScreen() {
  return (
    <SafeAreaView className="flex-1 bg-neutral-50">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="px-5 pt-4">
        <Text className="text-xl text-neutral-900 mb-4" style={{ fontFamily: Fonts.Median }}>
          Featured Restaurants
        </Text>

        {restaurants.map((item) => (
          <RestaurantCard
            key={item.id}
            {...item}
            onPress={() => console.log(`Pressed ${item.name}`)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}