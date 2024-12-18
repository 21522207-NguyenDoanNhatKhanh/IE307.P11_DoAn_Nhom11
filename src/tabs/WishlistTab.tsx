import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { icons, images } from '../constants';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { CustomSearch } from '~/components';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {};

const WishlishTab = (props: Props) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  type RootStackParamList = {
    Setting: undefined;
  };

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  }

  const handleSelectCategory = () => {}

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
    </ScrollView>
  );
};

export default WishlishTab;

type FeaturesDataProps = {
  id: number;
  title: string;
  image: string;
}

const FeaturesData = [
  {
    id: 1,
    title: 'Sort',
    image: icons.sort
  },
  {
    id: 2,
    title: 'Filter',
    image: icons.filter
  }
]