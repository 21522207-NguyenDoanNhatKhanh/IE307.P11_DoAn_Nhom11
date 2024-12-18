import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { images } from '../constants';
import { CustomButton } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type Props = {};

const GetStartedScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  type RootStackParamList = {
    HomeScreen: undefined;
  };

  const GetStarted = () => {
    navigation.navigate('HomeScreen');
  };
  return (
    <ImageBackground
      source={images.get_started}
      className="w-full h-full flex-1">
      <View className='h-[60vh]' />
      <View className="px-3 h-[40vh] items-center pt-3 shadow-md bg-black-100/30 w-full">
        <Text className="text-white text-4xl text-center font-bold ">
          Bạn muốn một bữa ăn ngon - bổ - rẻ?
        </Text>
        <Text className="text-[#F2F2F2] text-2xl font-medium text-center mt-3">
          {' '}
          Đặt hàng ngay!{' '}
        </Text>

        <CustomButton
          title="Bắt đầu"
          containerStyle="py-4 my-8"
          handlePress={GetStarted}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;