import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  OnboardingScreen,
  PlaceOrder,
  ProductsDetailsScreen,
  ProfileScreen,
  SignupScreen,
} from '../src/screens';
import CartTab from './../src/tabs/CartTab';
import * as SplashScreen from 'expo-splash-screen';
import GetStartedScreen from '~/src/screens/GetStartedScreen';
import { ItemDetails } from '~/src/constants/types';
import { CartProvider } from '~/components/CartContext';
import MenuList from '~/components/MenuList';
import { SettingTab } from '~/src/tabs';
import { SafeAreaView } from 'react-native';

import { UserProvider } from './../components/Context';

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
  MenuList: undefined;
  Setting: undefined;
};

const App = () => {
  const Stack = createNativeStackNavigator<RouteStackParamList>();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <UserProvider>
      <CartProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <NavigationIndependentTree>
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{ headerShown: false }}
                  initialRouteName="Onboarding">
                  <Stack.Screen name="HomeScreen" component={HomeScreen} />
                  <Stack.Screen name="GetStarted" component={GetStartedScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                  <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
                  <Stack.Screen name="Profile" component={ProfileScreen} />
                  <Stack.Screen name="Setting" component={SettingTab} />
                  <Stack.Screen name="Signup" component={SignupScreen} />
                  <Stack.Screen name="ProductDetails" component={ProductsDetailsScreen} />
                  <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                  <Stack.Screen name="Cart" component={CartTab} />
                  <Stack.Screen name="MenuList" component={MenuList} />
                </Stack.Navigator>
              </NavigationContainer>
            </NavigationIndependentTree>
          </SafeAreaView>
        </GestureHandlerRootView>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
