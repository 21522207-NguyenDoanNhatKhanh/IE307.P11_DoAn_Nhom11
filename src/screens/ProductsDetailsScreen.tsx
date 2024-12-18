import { RouteProp } from "@react-navigation/native";
import React, { useState } from "react"
import { FlatList, Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native"
import { RouteStackParamList } from "~/app";
import { icons } from "../constants";
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteTabsParamList } from "./HomeScreen";
import { ProductItem } from "~/components";
import { AirbnbRating } from "react-native-ratings";
import { FeaturesData } from "../tabs/HomeTab";
import { ScrollView } from "react-native-gesture-handler";

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
        navigation.navigate('Cart', {itemDetails: itemDetails!})
    }

    const [selectedSize, setSelectedSize] = useState("7 UK");
    const sizes = ["6 UK", "7 UK", "8 UK", "9 UK", "10 UK"];
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
            {/* Size Selection */}
            <View className="flex-row justify-center my-4">
                {sizes.map((size) => (
                    <TouchableOpacity
                        key={size}
                        className={`border px-3 py-2 mx-1 rounded-md ${selectedSize === size ? "border-pink-500 bg-pink-100" : "border-gray-300"
                            }`}
                        onPress={() => setSelectedSize(size)}
                    >
                        <Text className={`text-sm ${selectedSize === size ? "text-pink-500" : "text-gray-600"}`}>{size}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            {/* details */}
      <View className=" mt-5">
        <Text className="text-2xl font-bold text-black-100">
          {' '}
          {itemDetails?.title}{' '}
        </Text>
        <Text className="text-neutral-400 font-medium text-lg">
          {' '}
          Vision Alta Men’s Shoes Size (All Colours){' '}
        </Text>
        <View className="flex flex-row items-center mb-3">
          <View>
            <AirbnbRating
              count={itemDetails?.stars}
              reviews={['Terrible', 'Bad', 'Okay', 'Good', 'Great']}
              defaultRating={itemDetails?.stars}
              size={20}
              ratingContainerStyle={{flex: 1, flexDirection: 'row'}}
            />
          </View>

          <Text className="text-xl font-thin text-black-100/90 ">
            {' '}
            {itemDetails?.numberOfReview}{' '}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-x-3">
          <Text className="text-black-100 font-bold text-2xl text-start">
            {' '}
            ${itemDetails?.price}{' '}
          </Text>
          <Text className="text-black-100/50 font-thin text-xl  line-through text-start">
            {' '}
            {itemDetails?.priceBeforeDeal}{' '}
          </Text>
          <Text className="text-action font-thin text-xl ">
            {' '}
            {itemDetails?.priceOff}{' '}
          </Text>
        </View>
        <View className="mt-3">
          <Text className="text-xl font-semibold text-black-100">
            Product Details
          </Text>
        </View>
        {/* status */}
        <View className="flex flex-row items-center gap-x-3  mt-5">
          <FlatList
            data={StatusData}
            renderItem={({item}) => (
              <View className="bg-transparent py-1 px-2 border flex flex-row gap-x-1 rounded-lg border-neutral-500">
                <Image
                  className="w-6 h-6"
                  resizeMode="contain"
                  source={item.icon}
                />
                <Text className="text-neutral-400 font-medium text-lg">
                  {' '}
                  {item.name}{' '}
                </Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-3" />}
          />
        </View>
        {/* go to cart/ buy now */}
        <View className="flex flex-row gap-x-5 items-center mt-5">
          <View className="flex flex-row items-center">
            <View className="z-20">
              <Image
                source={icons.cart_circle}
                className="w-12 h-12  -mr-1"
                resizeMode="contain"
              />
            </View>
            <View className="bg-blue-600 py-[6px] px-4 -ml-4 rounded-xl z-10">
              <Text className="text-white font-medium text-2xl">
                {' '}
                Go To Cart{' '}
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            <View className="z-20">
              <Image
                source={icons.buy}
                className="w-12 h-12  -mr-1"
                resizeMode="contain"
              />
            </View>
            <View className="bg-green-500 py-[6px] px-4 -ml-4 rounded-xl z-10">
              <Text className="text-white font-medium text-2xl">
                {' '}
                Go To Cart{' '}
              </Text>
            </View>
          </View>
        </View>
        {/* delivery in ... */}
        <View className="bg-red-300 px-3 py-3 my-5">
          <Text className="text-black-100 text-lg ">Delivery in </Text>
          <Text className="text-black-100 text-2xl font-bold ">
            1 within Hour
          </Text>
        </View>
        {/* View similar */}
        <View className="flex flex-row items-center justify-between mb-8">
          <FlatList
            data={similarData}
            renderItem={({item}) => (
              <View className="bg-white py-3 px-3 rounded-lg border border-neutral-200 flex flex-row gap-x-2">
                <Image
                  source={item.icon}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
                <Text className="text-black-100 text-xl font-medium ">
                  {' '}
                  {item.name}{' '}
                </Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-3" />}
          />
        </View>
        {/* similar to */}
        <View className="mb-5">
          <Text className="text-2xl text-black-100 font-bold text-start">
            Similar To
          </Text>
          {/* features */}
          <View className="flex my-5 flex-row mx-5 justify-between ">
            <Text className="text-2xl font-bold ">282+ Items </Text>
            <View className="flex flex-row gap-x-3 ">
              {FeaturesData.map(item => (
                <View
                  className="bg-white  rounded-lg  flex-row flex items-center px-2 "
                  key={item.id}>
                  <Text className="text-black-100"> {item.title} </Text>
                  <Image
                    source={item.image}
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
            data={itemDetails ? [itemDetails] : []}
            renderItem={({item}) => (
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