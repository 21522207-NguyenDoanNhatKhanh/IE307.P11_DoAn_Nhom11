import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { images } from '~/src/constants';
import { ItemDetails, ProductTypes } from '~/src/constants/types';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParamList } from '~/app';

type ProductItemProps = {
  image: string;
  title: string;
  description: string;
  price: number;
  priceBeforeDeal: number;
  priceOff: string;
  stars: number;
  numberOfReview: number;
  size?: number[];
  itemDetails: ItemDetails;
};

type RootStackParamList = {
  ProductDetails: { itemDetails: ItemDetails } | undefined;
  Cart: undefined; // Thêm Cart vào danh sách route
};

const ProductItem: React.FC<ProductItemProps> = ({
  image,
  title,
  description,
  price,
  priceBeforeDeal,
  priceOff,
  stars,
  numberOfReview,
  itemDetails,
}) => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList, 'ProductDetails'>>();
  const NavigateToProductsDetails = () => {
    navigation.navigate('ProductDetails', { itemDetails });
  };
  return (
    <TouchableOpacity className="w-72 rounded-3xl bg-white" onPress={NavigateToProductsDetails}>
      <View className="px-3">
        <Image source={{ uri: image }} className="h-40 w-full rounded-xl" resizeMode="contain" />
        <Text className="my-22 text-start text-3xl font-bold text-black-100">{title}</Text>
        <Text className="text-start text-xl font-medium text-black-100/50">{description}</Text>
        <Text className="text-start text-2xl font-bold text-black-100"> ${price} </Text>
        <View className="flex flex-row items-center gap-x-3">
          <Text className="text-start text-xl font-thin text-black-100/20 line-through">
            {' '}
            {priceBeforeDeal}{' '}
          </Text>
          <Text className="text-xl font-thin text-action"> {priceOff} </Text>
        </View>
        <View className="mb-3 ml-3 flex flex-row items-center">
          <View>
            <AirbnbRating
              count={stars}
              reviews={['Terrible', 'Bad', 'OK', 'Good', 'Very Good']}
              defaultRating={stars}
              size={20}
              ratingContainerStyle={{ flex: 1, flexDirection: 'row' }}
            />
          </View>
          <Text className="text-xl font-thin text-black-100/30"> {numberOfReview} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
