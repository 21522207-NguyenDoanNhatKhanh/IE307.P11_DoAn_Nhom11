import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { icons, images } from '../constants';

type Props = {};
type ScreenRouteProps = RouteProp<RootStackParamList, 'Search'>;
type RootStackParamList = {
  Setting: undefined;
  Search: { query: string } | undefined;
};

interface SearchProps {
  route: ScreenRouteProps;
}

const suggestedFoods = [
  { id: 1, name: 'Bánh mì', image: require('assets/images/food/banh-mi-huynh-hoa-1080509.jpg') },
  { id: 2, name: 'Phở', image: require('assets/images/food/R.jpg') },
  { id: 3, name: 'Bún bò Huế', image: require('assets/images/food/bun-bo-hue.jpg') },
  { id: 4, name: 'Bò kho', image: require('assets/images/food/R (1).jpg') },
];

const SearchTab: React.FC<SearchProps> = ({ route }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  };

  const { query } = route.params || {};

  const renderSuggestedFood = ({ item }: { item: { id: number; name: string; image: any } }) => (
    <View className="mb-4 w-full rounded-lg bg-white p-4 shadow-md">
      <Image source={item.image} className="h-40 w-full" resizeMode="cover" />
      <Text className="mt-2 text-center text-lg font-medium text-gray-800">{item.name}</Text>
    </View>
  );

  return (
    <ScrollView className="bg-gray-100">
      <View className="mx-5 flex flex-row items-center justify-between py-5">
        <Image source={icons.menu} className="h-8 w-8" resizeMode="contain" />
        <Image source={images.logo} className="h-14" resizeMode="contain" />
        <TouchableOpacity onPress={NavigateToProfile}>
          <Image source={icons.profile} className="h-8 w-8" resizeMode="contain" />
        </TouchableOpacity>
      </View>

      {/* Search Result */}
      <View className="mx-5 mt-6">
        <Text className="text-3xl font-bold text-center text-gray-800">
          Kết quả tìm kiếm cho:
        </Text>
        <Text className="text-2xl font-bold text-center text-orange-500 mt-1">
          {query || "Không có"}
        </Text>
      </View>

      {/* No Result Message */}
      <View className="mx-5">
        {query ? (
          <>
            <Text className="text-lg text-center text-gray-500">
              Không có món nào trùng với tìm kiếm
            </Text>
            <Text className="text-lg text-center text-gray-500 mt-2">
              Bạn có thể thử:
            </Text>
            <View className="mt-6">
              {suggestedFoods.map((item) => (
                <View key={item.id}>
                  {renderSuggestedFood({ item })}
                </View>
              ))}
            </View>
          </>
        ) : (
          <Text className="text-lg text-center text-gray-500">
            Không có món nào trùng với tìm kiếm
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default SearchTab;
