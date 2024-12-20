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

export interface restaurantCategoryParams {
  _id:string;
  name:string;
  imageUrl:string
}

type ItemDetails = ProductTypes;
type ProductTypes = {
  image: string;
  title: string;
  price: number;
  priceBeforeDeal: number;
  priceOff: string;
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

export type {SplashTypes, FeaturesTypes, ProductTypes, TabBarTypes, ItemDetails};
