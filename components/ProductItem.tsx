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
  description: string;
  price: number;
  priceBeforeDeal: number;
  priceOff: string;
  stars: number;
  numberOfReview: number;
  size?: number[];
  itemDetails: ItemDetails;
}

type RootStackParamList = {
    ProductDetails: {itemDetails: ItemDetails} | undefined;
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
                <Text className="text-xl text-black-100/50 text-start font-medium">
                    {description}
                </Text>
                <Text className="text-black-100 font-bold text-2xl text-start">
                    {' '}
                    ${price}{' '}
                </Text>
                <View className="flex flex-row items-center gap-x-3">
                    <Text className="text-black-100/20 font-thin text-xl line-through text-start">
                    {' '}
                    {priceBeforeDeal}{' '}
                </Text>
                    <Text className="text-action font-thin text-xl">
                        {' '}
                        {priceOff}{' '}
                    </Text>
                </View>
                <View className="flex flex-row items-center mb-3 ml-3">
                    <View>
                        <AirbnbRating
                            count={stars}
                            reviews={["Terrible", "Bad", "OK", "Good", "Very Good"]}
                            defaultRating={stars}
                            size={20}
                            ratingContainerStyle={{flex: 1, flexDirection: 'row'}}
                        />
                    </View>
                    <Text className="text-xl font-thin text-black-100/30">
                        {' '}
                        {numberOfReview}{' '}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}



export default ProductItem;