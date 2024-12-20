import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { images } from "~/src/constants";
import { ItemDetails, ProductTypes } from "~/src/constants/types";
import { Rating, AirbnbRating } from 'react-native-ratings';
import { useNavigation } from "expo-router";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteStackParamList } from "~/app";

type ProductItemProps = {
  image: string;
  title: string;
  price: number;
  priceBeforeDeal: number;
  priceOff: string;
  itemDetails: ItemDetails;
}

type RootStackParamList = {
    ProductDetails: {itemDetails: ItemDetails} | undefined;
  };

const ProductItem: React.FC<ProductItemProps> = ({
    image,
    title,
    price,
    priceBeforeDeal,
    priceOff,
    itemDetails,
}) => {
    const navigation = useNavigation<StackNavigationProp<RouteStackParamList, 'ProductDetails'>>()
    const NavigateToProductsDetails = () => {
        navigation.navigate("ProductDetails", {itemDetails})
    }
    return (
        <TouchableOpacity className="w-72 bg-white rounded-3xl"
        onPress={NavigateToProductsDetails}
        >
            <View className="px-3">
                <Image
                    source={{ uri: image }}
                    className="w-full rounded-xl h-40"
                    resizeMode="contain"
                />
                <Text className="text-3xl text-black-100 my-22 text-start font-bold">
                    {title}
                </Text>
                <Text className="text-orange-500 font-bold text-2xl text-start">
                    {' '}
                    {price}₫{' '}
                </Text>
                <View className="flex flex-row items-center gap-x-3">
                    <Text className="text-black-100 font-semibold text-xl line-through text-start">
                    {' '}
                    {priceBeforeDeal}₫{' '}
                </Text>
                    <Text className="text-action font-semibold text-xl">
                        {' '}
                        {priceOff}₫{' '}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default ProductItem;