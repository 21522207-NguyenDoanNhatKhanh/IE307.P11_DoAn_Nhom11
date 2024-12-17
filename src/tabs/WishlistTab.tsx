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
      {/**features */}
      <View className='flex my-5 flex-row mx-5 justify-between'>
        <Text className='text-2xl font-bold'>All features</Text>
        <View className='flex flex-row gap-x-3'>
          {
            FeaturesData.map((item) => (
              <View 
                className='bg-white rounded-lg flex-row flex items-center px-3'
                key={item.id}
              >
                <Text>{item.title}</Text>
                <Image source={item.image} className='w-6 h-6' resizeMode='contain'/>
              </View>
            ))
          }
        </View>        
      </View>
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