import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CheckoutScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  PlaceOrder,
  ProductsDetailsScreen,
  ProfileScreen,
  SignupScreen,
} from '../src/screens';
import * as SplashScreen from 'expo-splash-screen';
import GetStartedScreen from '~/src/screens/GetStartedScreen';
import { ItemDetails, ProductTypes } from '~/src/constants/types';
import CartTab from './../src/tabs/CartTab';
export type RouteStackParamList = {
  Onboarding: undefined;
  GetStarted: undefined;
  Login: undefined;
  Signup: undefined;
  HomeScreen: undefined;
  Profile: undefined;
  Checkout: undefined;
  PlaceOrder: { itemDetails: ItemDetails } | undefined;
  ForgotPassword: undefined;
  ProductDetails: { itemDetails: ItemDetails } | undefined;
  Cart: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RouteStackParamList>();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationIndependentTree>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="GetStarted">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="GetStarted" component={GetStartedScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="ProductDetails" component={ProductsDetailsScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          </Stack.Navigator>
          <Stack.Screen name="Cart" component={CartTab} />
        </NavigationContainer>
      </GestureHandlerRootView>
    </NavigationIndependentTree>
  );
};

export default App;
