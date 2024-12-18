import { ImageSourcePropType } from "react-native";

type SplashTypes = {
  image: ImageSourcePropType;
  title: string;
  description: string;
};

type FeaturesTypes = {
  image: string;
  title: string;
};

type ItemDetails = ProductTypes;
type ProductTypes = {
  image: string;
  title: string;
  price: number;
  priceBeforeDeal: number;
  priceOff: string;
  stars: number;
  numberOfReview: number;
  size?: number[];
};
type TabBarTypes = {
  title?: string;
  image: string;
  link: string;
  inActiveColor: string;
  activeColor: string;
  inActiveBGColor?: string;
  activeBGColor?: string;
};

export interface restaurantParams {
    _id:string;
    name:string;
    description:string;
    imageUrl:any;
    foodType:string
    time:string;
    deliveryTimeFrom:number;
    deliveryTimeTo:number;
    deliveryMethod:string;
    rating:number;
    ratingCount:number;
}

export type {SplashTypes, FeaturesTypes, ProductTypes, TabBarTypes, ItemDetails};
