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
            image: <Image source={SplashData[0].image} />,
            title: SplashData[0].title,
            subtitle: SplashData[0].description,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={SplashData[0].image} />,
            title: SplashData[0].title,
            subtitle: SplashData[0].description,
          },
          {
            backgroundColor: '#fff',
            image: <Image source={SplashData[0].image} />,
            title: SplashData[0].title,
            subtitle: SplashData[0].description,
          },
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
