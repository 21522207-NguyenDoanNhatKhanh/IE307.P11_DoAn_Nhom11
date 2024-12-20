import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './MenuList';
import CartTab from '../src/tabs/CartTab';

const Stack = createStackNavigator();

const CartNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Products' }} />
            <Stack.Screen name="Cart" component={CartTab} options={{ title: 'Your Cart' }} />
        </Stack.Navigator>
    );
};

export default CartNavigator;
