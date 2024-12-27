import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { RouteStackParamList } from '~/app';
import { icons } from '../constants';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteTabsParamList } from './HomeScreen';
import { ProductItem } from '~/components';
import { FeaturesData } from '../tabs/HomeTab';
import { ScrollView } from 'react-native-gesture-handler';
import { ProductData } from '../constants/data';

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

  const navigateToMenuList = () => {
    navigation.navigate('MenuList');
  };

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
      {/* details */}
      <View className=" mt-5">
        <Text className="text-2xl font-bold text-black-100"> {itemDetails?.title} </Text>
        <View className="flex flex-row items-center gap-x-3">
          <Text className="text-start text-2xl font-bold text-orange-500">
            {' '}
            {itemDetails?.price}₫{' '}
          </Text>
          <Text className="text-start text-xl font-semibold  text-black-100/50 line-through">
            {' '}
            {itemDetails?.priceBeforeDeal}₫{' '}
          </Text>
          <Text className="text-xl font-semibold text-action "> {itemDetails?.priceOff}₫ </Text>
        </View>
        <View className="mt-3">
          <Text className="text-xl font-semibold text-black-100">Chi tiết món ăn:</Text>
          <Text className="text-lg font-medium text-neutral-400">
            Đây đơn giản là món {itemDetails?.title}. Vì tôi không tạo component description cho
            từng món ăn được huhu. Những dòng này mang mục đích là phần mô tả dài ra thay vì sử dụng
            LoremIpsum. ;3
          </Text>
        </View>
        <TouchableOpacity
          className="mt-5 items-center rounded-lg bg-orange-500 p-3"
          onPress={navigateToMenuList}>
          <Text className="text-2xl font-semibold text-white">Đặt món ngay {'>'}</Text>
        </TouchableOpacity>
        {/* delivery in ... */}
        <View className="my-5 bg-red-300 px-3 py-3">
          <Text className="text-lg text-black-100 ">Giao hàng trong vòng 30 phút </Text>
          <Text className="text-2xl font-bold text-black-100 ">Bán kính 5km miễn ship!!</Text>
        </View>
        {/* similar to */}
        <View className="mb-5">
          <Text className="text-start text-2xl font-bold text-black-100">Các món tương tự</Text>
          {/* features */}
          <View className="flex my-5 flex-row mx-5 justify-between ">
            <Text className="text-2xl font-bold ">Vô vàn món khác </Text>
            <View className="flex flex-row gap-x-3 ">
              {FeaturesData.map((item) => (
                <View
                  className="flex  flex-row  items-center rounded-lg bg-white px-2 "
                  key={item.id}>
                  <Text className="text-black-100"> {item.title} </Text>
                  <Image source={item?.image} className="h-4 w-4" resizeMode="contain" />
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* similar products */}
        <View className="my-8">
          <FlatList
            data={ProductData}
            renderItem={({ item }) => (
              <ProductItem
                image={item.image}
                title={item.title}
                price={item.price}
                priceBeforeDeal={item.priceBeforeDeal}
                priceOff={item.priceOff}
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
