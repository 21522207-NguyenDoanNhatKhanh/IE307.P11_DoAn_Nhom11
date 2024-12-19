import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { RouteStackParamList } from '~/app';
import { icons } from '../constants';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteTabsParamList } from './HomeScreen';
import { ProductItem } from '~/components';
import { AirbnbRating } from 'react-native-ratings';
import { FeaturesData } from '../tabs/HomeTab';
import { ScrollView } from 'react-native-gesture-handler';

type ScreenRouteProps = RouteProp<RouteStackParamList, 'ProductDetails'>;

type ProductDetailsProps = {
  route: ScreenRouteProps;
};

const ProductsDetailsScreen: React.FC<ProductDetailsProps> = ({ route }) => {
  const { itemDetails } = route.params || {};
  const navigation = useNavigation<StackNavigationProp<RouteTabsParamList, 'Cart'>>();
  const GoBack = () => {
    navigation.goBack();
  };
  const NavigateToCart = () => {
    navigation.navigate('Cart', { itemDetails: itemDetails! });
  };

  const [selectedSize, setSelectedSize] = useState('7 UK');
  const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];
  return (
    <ScrollView className="px-3 pt-5">
      {/**header */}
      <View className="flex flex-row items-center justify-between">
        <TouchableOpacity onPress={GoBack}>
          <Image source={icons.next1} className="h-8 w-8 rotate-180" resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={NavigateToCart}>
          <Image source={icons.cart} className="h-6 w-6" resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {/**img slider */}
      <View className="mt-5">
        <Image source={{ uri: itemDetails?.image }} className="mx-1 h-72 rounded-2xl" />
      </View>
      {/* Size Selection */}
      <View className="my-4 flex-row justify-center">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            className={`mx-1 rounded-md border px-3 py-2 ${
              selectedSize === size ? 'border-pink-500 bg-pink-100' : 'border-gray-300'
            }`}
            onPress={() => setSelectedSize(size)}>
            <Text
              className={`text-sm ${selectedSize === size ? 'text-pink-500' : 'text-gray-600'}`}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* details */}
      <View className=" mt-5">
        <Text className="text-2xl font-bold text-black-100"> {itemDetails?.title} </Text>
        <Text className="text-lg font-medium text-neutral-400">
          {' '}
          Vision Alta Men’s Shoes Size (All Colours){' '}
        </Text>
        <View className="mb-3 flex flex-row items-center">
          <View>
            <AirbnbRating
              count={itemDetails?.stars}
              reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
              defaultRating={itemDetails?.stars}
              size={20}
              ratingContainerStyle={{ flex: 1, flexDirection: 'row' }}
            />
          </View>

          <Text className="text-xl font-thin text-black-100/90 ">
            {' '}
            {itemDetails?.numberOfReview}{' '}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-x-3">
          <Text className="text-start text-2xl font-bold text-black-100">
            {' '}
            ${itemDetails?.price}{' '}
          </Text>
          <Text className="text-start text-xl font-thin  text-black-100/50 line-through">
            {' '}
            {itemDetails?.priceBeforeDeal}{' '}
          </Text>
          <Text className="text-xl font-thin text-action "> {itemDetails?.priceOff} </Text>
        </View>
        <View className="mt-3">
          <Text className="text-xl font-semibold text-black-100">Product Details</Text>
          <Text className="text-md font-medium text-neutral-400">{itemDetails?.description}</Text>
        </View>
        {/* status */}
        <View className="mt-5 flex flex-row items-center  gap-x-3">
          <FlatList
            data={StatusData}
            renderItem={({ item }) => (
              <View className="flex flex-row gap-x-1 rounded-lg border border-neutral-500 bg-transparent px-2 py-1">
                <Image className="h-6 w-6" resizeMode="contain" source={item.icon} />
                <Text className="text-lg font-medium text-neutral-400"> {item.name} </Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-3" />}
          />
        </View>
        {/* go to cart/ buy now */}
        <View className="mt-5 flex flex-row items-center gap-x-5">
          <View className="flex flex-row items-center">
            <View className="z-20">
              <Image source={icons.cart_circle} className="-mr-1 h-12  w-12" resizeMode="contain" />
            </View>
            <View className="z-10 -ml-4 rounded-xl bg-blue-600 px-4 py-[6px]">
              <Text className="text-2xl font-medium text-white"> Go To Cart </Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            <View className="z-20">
              <Image source={icons.buy} className="-mr-1 h-12  w-12" resizeMode="contain" />
            </View>
            <View className="z-10 -ml-4 rounded-xl bg-green-500 px-4 py-[6px]">
              <Text className="text-2xl font-medium text-white"> Go To Cart </Text>
            </View>
          </View>
        </View>
        {/* delivery in ... */}
        <View className="my-5 bg-red-300 px-3 py-3">
          <Text className="text-lg text-black-100 ">Delivery in </Text>
          <Text className="text-2xl font-bold text-black-100 ">1 within Hour</Text>
        </View>
        {/* View similar */}
        <View className="mb-8 flex flex-row items-center justify-between">
          <FlatList
            data={similarData}
            renderItem={({ item }) => (
              <View className="flex flex-row gap-x-2 rounded-lg border border-neutral-200 bg-white px-3 py-3">
                <Image source={item.icon} className="h-6 w-6" resizeMode="contain" />
                <Text className="text-xl font-medium text-black-100 "> {item.name} </Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-3" />}
          />
        </View>
        {/* similar to */}
        <View className="mb-5">
          <Text className="text-start text-2xl font-bold text-black-100">Similar To</Text>
          {/* features */}
          <View className="mx-5 my-5 flex flex-row justify-between ">
            <Text className="text-2xl font-bold ">282+ Items </Text>
            <View className="flex flex-row gap-x-3 ">
              {FeaturesData.map((item) => (
                <View
                  className="flex  flex-row  items-center rounded-lg bg-white px-2 "
                  key={item.id}>
                  <Text className="text-black-100"> {item.title} </Text>
                  <Image source={item.image} className="h-4 w-4" resizeMode="contain" />
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* similar products */}
        <View className="my-8">
          <FlatList
            data={itemDetails ? [itemDetails] : []}
            renderItem={({ item }) => (
              <ProductItem
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                priceBeforeDeal={item.priceBeforeDeal}
                priceOff={item.priceOff}
                stars={item.stars}
                numberOfReview={item.numberOfReview}
                itemDetails={item}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-8" />}
            ListFooterComponent={<View className="w-8" />}
            ListHeaderComponent={<View className="w-8" />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductsDetailsScreen;

interface similarDataType {
  icon: ImageSourcePropType;
  name: string;
}

const similarData: similarDataType[] = [
  {
    icon: icons.eye,
    name: 'View Similar',
  },
  {
    icon: icons.components,
    name: 'Add to Compare',
  },
];

interface StatusDataType {
  id: number;
  icon: ImageSourcePropType;
  name: string;
}

const StatusData: StatusDataType[] = [
  {
    id: 0,
    icon: icons.lock,
    name: 'Nearest Store',
  },
  {
    id: 1,
    icon: icons.lock,
    name: 'VIP',
  },
  {
    id: 2,
    icon: icons.lock,
    name: 'Return policy',
  },
];
