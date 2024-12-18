import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { icons, images } from '../constants';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomSearch, ProductItem } from '~/components';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ProductData } from '../constants/data';
import { restuarantCategories } from '../constants/data'
import CategoryCard from '~/components/CategoryCard';

type Props = {};

const HomeTab = (props: Props) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  type RootStackParamList = {
    Setting: undefined;
  };

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  }

  const [activeCat, setActiveCat] = useState<string>('')

  const scrollOffsetY = useRef(new Animated.Value(0)).current

  const animateCategories = {
    transform: [
      {
        translateY: scrollOffsetY.interpolate({
          inputRange: [50, 100],
          outputRange: [0, -90],
          extrapolate: "clamp"
        })
      },
    ]
  }

  const handleSelectCategory = () => { }

  return (
    <ScrollView>
      <View className='flex flex-row items-center justify-between mx-5'>
        <Image
          source={icons.menu}
          className='w-8 h-8'
          resizeMode='contain'
        />
        <Image
          source={images.logo}
          className='h-14'
          resizeMode='contain'
        />
        <TouchableOpacity onPress={NavigateToProfile}>
          <Image
            source={icons.profile}
            className='w-8 h-8'
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      {/**search */}
      <CustomSearch initialQuery='' />
      {/**features */}
      <View className='flex my-5 flex-row mx-5 justify-between'>
        <Text className='text-2xl font-bold'>Danh mục</Text>
        <View className='flex flex-row gap-x-3'>
          {
            FeaturesData.map((item) => (
              <View
                className='bg-white rounded-lg flex-row flex items-center px-3'
                key={item.id}
              >
                <Text>{item.title}</Text>
                <Image source={item.image} className='w-6 h-6' resizeMode='contain' />
              </View>
            ))
          }
        </View>
      </View>
      {/**categories */}
      <View>
        <Animated.ScrollView>
          <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            style={[animateCategories]}
          >
            {
              restuarantCategories.map((cat, index) => (
                <CategoryCard
                  key={index}
                  details={{
                    "image": cat.imageUrl,
                    "name": cat.name,
                    "_id": cat._id
                  }}

                  catProps={{
                    "activeCat": activeCat,
                    "onPressCat": () => setActiveCat(cat?._id)
                  }}
                />
              ))
            }
          </Animated.ScrollView>
        </Animated.ScrollView>
      </View>
      {/**offer */}
      <View>
        <Image
          source={images.deal_off}
          resizeMode='contain'
          className='w-full'
        />
      </View>
      {/**daily */}
      <View className="bg-[#4392F9] rounded-xl justify-between flex flex-row pl-5 py-5">
        <View>
          <Text className='text-white text-center text-lg font-semibold'>
            Giảm giá trong ngày
          </Text>
          <View className='flex flex-row mt-3 items-center gap-x-1'>
            <Image
              source={icons.calender}
              resizeMode='contain'
              className='w-6 h-6'
            />
            <Text className='text-white text-base font-medium'>
              {' '}
              79h 26m 3s còn lại{' '}
            </Text>
          </View>
        </View>
        <View className='py-2 px-2 rounded-lg border-white h-12 px-3 border-2 mr-3 flex flex-row gap-x-px items-center'>
          <Text className='text-white font-medium text-lg'>Đến xem!</Text>
          <Image
            source={icons.show_all}
            resizeMode='contain'
            className='w-6 h-6'
          />
        </View>
      </View>
      {/* Products */}
      <View className="my-8">
      <FlatList
          data={ProductData}
          renderItem={({ item }) => (
            <ProductItem
              image={item.image[0]}
              title={item.title}
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
      <View className='flex justify-between bg-white flex-row items-center py-3 px-4 mx-5 rounded-lg'>
        <Image
          source={icons.offer}
          className='w-20 h-20'
          resizeMode='contain'
        />
        <View className=''>
          <Text className='text-2xl text-black-100 font-bold'>
            Ưu đãi đặc biệt!!
          </Text>
          <Text className='text-neutral-500 text-base w-52'>
            Chúng tôi cam kết đưa ra những ưu đãi hời nhất!
          </Text>
        </View>
      </View>
      {/**another offer */}
      <View className='my-5'>
        <Image
          source={images.flat}
          className='self-center'
          resizeMode='contain'
        />
      </View>
      {/**trending */}
      <View className="bg-red-500 rounded-xl justify-between flex flex-row mx-5 pl-5 py-5">
        <View>
          <Text className='text-white text-center text-lg font-semibold'>
            Những món đang HOT
          </Text>
          <View className='flex flex-row mt-3 items-center gap-x-1'>
            <Image
              source={icons.calender}
              resizeMode='contain'
              className='w-6 h-6'
            />
            <Text className='text-white text-base font-medium'>
              {' '}
              79h 26m 3s còn lại{' '}
            </Text>
          </View>
        </View>
        <View className='py-2 px-2 rounded-lg border-white h-12 px-3 border-2 mr-3 flex flex-row gap-x-px items-center'>
          <Text className='text-white font-medium text-lg'>Đến xem!</Text>
          <Image
            source={icons.show_all}
            resizeMode='contain'
            className='w-6 h-6'
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeTab;

type FeaturesDataProps = {
  id: number;
  title: string;
  image: string;
}

export const FeaturesData = [
  {
    id: 1,
    title: 'Xắp sếp',
    image: icons.sort
  },
  {
    id: 2,
    title: 'Lọc',
    image: icons.filter
  }
]