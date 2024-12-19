import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons, images } from '../constants';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomSearch, ProductItem } from '~/components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { CategoriesData, ProductData } from '../constants/data';

type Props = {};

const HomeTab = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  type RootStackParamList = {
    Setting: undefined;
  };

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  };

  const handleSelectCategory = () => {};

  return (
    <ScrollView>
      <View className="mx-5 flex flex-row items-center justify-between">
        <Image source={icons.menu} className="h-8 w-8" resizeMode="contain" />
        <Image source={images.logo_uit_cake} className="h-14" resizeMode="contain" />
        <TouchableOpacity onPress={NavigateToProfile}>
          <Image source={icons.profile} className="h-8 w-8" resizeMode="contain" />
        </TouchableOpacity>
      </View>
      {/**search */}
      <CustomSearch initialQuery="" />
      {/**features */}
      <View className="mx-5 my-5 flex flex-row justify-between">
        <Text className="text-2xl font-bold">All features</Text>
        <View className="flex flex-row gap-x-3">
          {FeaturesData.map((item) => (
            <View className="flex flex-row items-center rounded-lg bg-white px-3" key={item.id}>
              <Text>{item.title}</Text>
              <Image source={item.image} className="h-6 w-6" resizeMode="contain" />
            </View>
          ))}
        </View>
      </View>
      {/**categories */}
      <View>
        <FlatList
          data={CategoriesData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={handleSelectCategory}>
              <Image source={{ uri: item.image }} className="h24 w-24 rounded-full" />
              <Text className="text-center text-lg font-medium text-black-100/80">
                {' '}
                {item.title}{' '}
              </Text>
            </TouchableOpacity>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View className="w-8" />}
          ListFooterComponent={<View className="w-8" />}
          ListHeaderComponent={<View className="w-8" />}
        />
      </View>
      {/**offer */}
      <View>
        <Image source={images.deal_off} resizeMode="contain" className="mt-8 w-full" />
      </View>
      {/**daily */}
      <View className="mx-5 flex flex-row justify-between rounded-xl bg-[#4392F9] py-5 pl-5">
        <View>
          <Text className="text-center text-lg font-semibold text-white">Deals of the day</Text>
          <View className="mt-3 flex flex-row items-center gap-x-1">
            <Image source={icons.calender} resizeMode="contain" className="h-6 w-6" />
            <Text className="text-base font-medium text-white"> 79h 26m 3s remaining </Text>
          </View>
        </View>
        <View className="mr-3 flex h-12 flex-row items-center gap-x-px rounded-lg border-2 border-white px-2 px-3 py-2">
          <Text className="text-lg font-medium text-white">View all</Text>
          <Image source={icons.show_all} resizeMode="contain" className="h-6 w-6" />
        </View>
      </View>
      {/* Products */}
      <View className="my-8">
        <FlatList
          data={ProductData}
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
      {/**special offer */}
      <View className="mx-5 flex flex-row items-center justify-between rounded-lg bg-white px-4 py-3">
        <Image source={icons.offer} className="h-20 w-20" resizeMode="contain" />
        <View className="">
          <Text className="text-2xl font-bold text-black-100">Special offers</Text>
          <Text className="w-52 text-base text-neutral-500">
            We make sure providing you the best price!
          </Text>
        </View>
      </View>
      {/**another offer */}
      <View className="my-5">
        <Image source={images.flat} className="self-center" resizeMode="contain" />
      </View>
      {/**trending */}
      <View className="mx-5 flex flex-row justify-between rounded-xl bg-red-500 py-5 pl-5">
        <View>
          <Text className="text-center text-lg font-semibold text-white">Trending products</Text>
          <View className="mt-3 flex flex-row items-center gap-x-1">
            <Image source={icons.calender} resizeMode="contain" className="h-6 w-6" />
            <Text className="text-base font-medium text-white"> 79h 26m 3s remaining </Text>
          </View>
        </View>
        <View className="mr-3 flex h-12 flex-row items-center gap-x-px rounded-lg border-2 border-white px-2 px-3 py-2">
          <Text className="text-lg font-medium text-white">View all</Text>
          <Image source={icons.show_all} resizeMode="contain" className="h-6 w-6" />
        </View>
      </View>
      {/* Products */}
      <View className="my-8">
        <FlatList
          data={ProductData}
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
    </ScrollView>
  );
};

export default HomeTab;

type FeaturesDataProps = {
  id: number;
  title: string;
  image: string;
};

export const FeaturesData = [
  {
    id: 1,
    title: 'Sort',
    image: icons.sort,
  },
  {
    id: 2,
    title: 'Filter',
    image: icons.filter,
  },
];
