import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { ScrollView } from 'react-native-gesture-handler';
import { icons, images } from '../constants';

type Props = {};
type ScreenRouteProps = RouteProp<RootStackParamList, 'Search'>;
type RootStackParamList = {
  Setting: undefined;
  Search: {query: string} | undefined;
};

interface SearchProps {
  route: ScreenRouteProps;
}

const SearchTab: React.FC<SearchProps> = ({route}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  }
  const {query} = route.params || {}
  return (
    <ScrollView >
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
      <Text className='text-3xl font-bold text-center'>Kết quả tìm kiếm cho:</Text>
      <Text className='text-3xl font-bold text-center text-orange-500 '>{query}</Text>
    </ScrollView>
  );
};

export default SearchTab;
