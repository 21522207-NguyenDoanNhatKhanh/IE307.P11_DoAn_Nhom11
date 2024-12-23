import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab, WishlistTab, CartTab, SearchTab, SettingTab} from '../tabs';
import {Image, Text, View} from 'react-native';
import {icons} from '../constants';
import { ItemDetails } from '../constants/types';

type TabBarItemProps = {
  source: any;
  focused: boolean;
  cart?: boolean;
  name?: string;
};
const TabBarItem: React.FC<TabBarItemProps> = ({
  source,
  focused,
  cart,
  name,
}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: cart ? -24 : 18,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: cart ? 64 : 'auto',
          height: cart ? 64 : 'auto',
          borderRadius: cart ? 32 : 0,
          backgroundColor: focused ? (cart ? 'orange' : 'white') : 'white',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: cart ? 5 : 0,
        }}>
        <Image
          source={source}
          style={{
            tintColor: focused ? (cart ? 'white' : 'orange') : 'black',
            width: 24,
            height: 24,
            paddingTop: 12,
          }}
        />
      </View>
      {!cart && (
        <Text
          className="font-pthin text-base"
          style={{color: focused ? 'orange' : 'black', fontSize: 12}}>
          {name}
        </Text>
      )}
    </View>
  );
};
type Props = {};
export type RouteTabsParamList = {
  Home: undefined;
  Wishlist: undefined;
  Cart: {itemDetails: ItemDetails} | undefined
  Search: {query: string} | undefined;
  Setting: undefined;
}
const HomeScreen = (props: Props) => {
  const Tab = createBottomTabNavigator<RouteTabsParamList>();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'grey',
          height: 60,
          borderTopWidth: 0.2,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: 'orange',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <TabBarItem source={icons.homepg} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistTab}
        options={{
          tabBarLabel: 'Hot',
          tabBarIcon: ({focused}) => (
            <TabBarItem
              source={icons.fire}
              focused={focused}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartTab}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <TabBarItem
              source={icons.cartpg}
              focused={focused}
              cart              
            />
          ),
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({focused}) => (
            <TabBarItem source={icons.search} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingTab}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <TabBarItem
              source={icons.pr5}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
