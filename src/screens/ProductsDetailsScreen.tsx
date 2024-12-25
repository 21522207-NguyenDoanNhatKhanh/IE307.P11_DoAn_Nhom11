import { RouteProp } from "@react-navigation/native";
import React from "react"
import { FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import { RouteStackParamList } from "~/app";
import { icons } from "../constants";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteTabsParamList } from "./HomeScreen";
import { ProductItem } from "~/components";
import { FeaturesData } from "../tabs/HomeTab";
import { ScrollView } from "react-native-gesture-handler";
import { ProductData } from "../constants/data";

type ScreenRouteProps = RouteProp<RouteStackParamList, "ProductDetails">

type ProductDetailsProps = {
  route: ScreenRouteProps;
}

const ProductsDetailsScreen: React.FC<ProductDetailsProps> = ({ route }) => {
  const { itemDetails } = route.params || {};
  const navigation = useNavigation<StackNavigationProp<RouteTabsParamList, "Cart">>();
  const GoBack = () => {
    navigation.goBack()
  }
  const NavigateToCart = () => {
    navigation.navigate('Cart', { itemDetails: itemDetails! })
  }

  const navigateToMenuList = () => {
    navigation.navigate('MenuList')
  }

  return (
    <ScrollView className="pt-5 px-3">
      {/**header */}
      <View className="flex flex-row justify-between items-center">
        <TouchableOpacity
          onPress={GoBack}
        >
          <Image
            source={icons.next1}
            className="rotate-180 w-8 h-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={NavigateToCart}
        >
          <Image
            source={icons.cart}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      {/**img slider */}
      <View className="mt-5">
        <Image
          source={{ uri: itemDetails?.image }}
          className="h-72 mx-1 rounded-2xl"
        />
      </View>
      {/* details */}
      <View className=" mt-5">
        <Text className="text-2xl font-bold text-black-100">
          {' '}
          {itemDetails?.title}{' '}
        </Text>
        <View className="flex flex-row items-center gap-x-3">
          <Text className="text-orange-500 font-bold text-2xl text-start">
            {' '}
            {itemDetails?.price}₫{' '}
          </Text>
          <Text className="text-black-100/50 font-semibold text-xl  line-through text-start">
            {' '}
            {itemDetails?.priceBeforeDeal}₫{' '}
          </Text>
          <Text className="text-action font-semibold text-xl ">
            {' '}
            {itemDetails?.priceOff}₫{' '}
          </Text>
        </View>
        <View className="mt-3">
          <Text className="text-xl font-semibold text-black-100">
            Chi tiết món ăn:
          </Text>
          <Text className="text-neutral-400 font-medium text-lg">
            Đây đơn giản là món {itemDetails?.title}. Vì tôi không tạo component description cho từng món ăn được huhu. Những dòng này mang mục đích là phần mô tả dài ra thay vì sử dụng LoremIpsum. ;3
          </Text>
        </View>
        <TouchableOpacity className="bg-orange-500 rounded-lg p-3 mt-5 items-center" onPress={navigateToMenuList} >
        <Text className="text-white text-2xl font-semibold">Đặt món ngay {'>'}</Text>
        </TouchableOpacity>
        {/* delivery in ... */}
        <View className="bg-red-300 px-3 py-3 my-5">
          <Text className="text-black-100 text-lg ">Giao hàng trong vòng 30 phút </Text>
          <Text className="text-black-100 text-2xl font-bold ">
            Bán kính 5km miễn ship!!
          </Text>
        </View>
        {/* similar to */}
        <View className="mb-5">
          <Text className="text-2xl text-black-100 font-bold text-start">
            Các món tương tự
          </Text>
          {/* features */}
          <View className="flex my-5 flex-row mx-5 justify-between ">
            <Text className="text-2xl font-bold ">Vô vàn món khác </Text>
            <View className="flex flex-row gap-x-3 ">
              {FeaturesData.map(item => (
                <View
                  className="bg-white  rounded-lg  flex-row flex items-center px-2 "
                  key={item.id}>
                  <Text className="text-black-100"> {item.title} </Text>
                  <Image
                    source={item?.image}
                    className="w-4 h-4"
                    resizeMode="contain"
                  />
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
  )
}

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