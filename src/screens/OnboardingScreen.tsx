import { View, Text, Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { SplashData } from '../constants/data';
import { useNavigation } from 'expo-router';
type Props = {};

const OnboardingScreen = (props: Props) => {

  const navigate = useNavigation();
  const handleDone = () => {
    navigate.navigate('Login');
  }

  return (
    <View className='flex-1'>
      <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={SplashData[0].image} resizeMode='contain' className='w-full'/>,
            title: SplashData[0].title,
            subtitle: SplashData[0].description,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={SplashData[1].image} resizeMode='contain' className='w-full h-40'/>,
            title: SplashData[1].title,
            subtitle: SplashData[1].description,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={SplashData[2].image} resizeMode='contain' className='w-full h-40'/>,
            title: SplashData[2].title,
            subtitle: SplashData[2].description,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
