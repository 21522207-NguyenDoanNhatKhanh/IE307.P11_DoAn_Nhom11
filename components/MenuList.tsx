import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CartContext, CartItem } from './CartContext';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { icons, images } from '~/src/constants';

const products: CartItem[] = [
    { id: 1, name: 'Burrito bòa', price: 40000, image: require('assets/images/food/burgerDisp.jpg'), quantity: 0 },
    { id: 2, name: 'Cơm chiên dương châu', price: 20000, image: require('assets/images/food/Chicken-Republic-Fried-Rice.jpg'), quantity: 0 },
    { id: 3, name: 'Burrito chay', price: 30000, image: require('assets/images/food/burgerTwoDisp.jpg'), quantity: 0 },
    { id: 4, name: 'Probably thịt kho', price: 50000, image: require('../assets/images/food/Menum.freis.GissDodo.png'), quantity: 0 },
    { id: 5, name: 'Cánh gà + Khoai tây chin', price: 70000, image: require('../assets/images/food/Menum.freis.Fried-Yam-and-Chicken-Wings.png'), quantity: 0 },
    { id: 6, name: 'Cánh gà + Xoài non', price: 60000, image: require('../assets/images/food/Menum-Fries--Chips-Chicken-Wings.png'), quantity: 0 },
    { id: 7, name: 'Probably bánh mì', price: 20000, image: require('../assets/images/food/ToastPan-Sandwhiches--SteakSandwich.jpeg'), quantity: 0 },
    { id: 8, name: 'Săn uých xông khói', price: 30000, image: require('../assets/images/food/ToastPan-wrap--smokedTurkeyWrap.jpeg'), quantity: 0 },
    { id: 9, name: 'Săn uých thịt', price: 35000, image: require('../assets/images/food/ToastPan-Sandwhiches--SteakSandwich.jpeg'), quantity: 0 },
    { id: 10, name: 'Tép rim', price: 40000, image: require('../assets/images/food/Menum-PepperredProtein--pepperredPrawn.png'), quantity: 0 },
    { id: 11, name: 'Thịt kho (?)', price: 50000, image: require('../assets/images/food/Menum-PepperSoup--Goat-meat-pepper-soup.png'), quantity: 0 },
    { id: 12, name: 'Still burrito', price: 35000, image: require('../assets/images/food/Menum-Shawarma--Extra-large-chicken-shawarma.png'),quantity: 0 },
    { id: 13, name: 'Xiên bẩn', price: 69000, image: require('../assets/images/food/Menum-Shawarma--shawarmaCombo.jpeg'), quantity: 0 },
    { id: 14, name: 'Thịt dê rim tiêu', price: 70000, image: require('../assets/images/food/Menum-PepperSoup--Goat-meat-pepper-soup.png'), quantity: 0 },
    { id: 15, name: 'Cơm chiên trứng tỏi', price: 80000, image: require('../assets/images/food/Chicken-Republic-Rice-Beans-with-sauce.jpg'), quantity: 0 },
];

type RootStackParamList = {
    Cart: undefined;
};

const MenuList: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { addToCart } = useContext(CartContext) || {};
    const GoBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            {/**header */}
            <View className="flex flex-row justify-between items-center">
                <TouchableOpacity
                    onPress={GoBack}
                >
                    <Image
                        source={icons.next1}
                        className="rotate-180 w-8 h-8"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <Image
                    source={images.logo}
                    className='h-14'
                    resizeMode='contain'
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}
                >
                    <Image
                        source={icons.cart}
                        className="w-6 h-6"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            <Text className='text-3xl font-bold text-center pb-2'>Xin mời chọn món ;3</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.image} style={styles.image} />
                        <View className='flex flex-row items-center justify-between'>                            
                            <Text className='text-orange-500 text-xl font-semibold'>{item.name} - {item.price}₫</Text>
                            
                            <TouchableOpacity className='bg-orange-500 rounded-full'
                                onPress={() => addToCart?.(item)}
                            >
                                <Image className="h-12 w-12" source={icons.addcart} resizeMode="contain" />
                            </TouchableOpacity>
                        </View>

                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    item: {
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    image: { width: "100%", height: 240, borderRadius: 8, marginBottom: 10 },
});

export default MenuList;
