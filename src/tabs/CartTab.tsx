import React, { useContext } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { CartContext } from '../../components/CartContext';
import { useNavigation } from 'expo-router';
import { StackNavigationProp } from '@react-navigation/stack';
import icons from '../constants/icons';
import images from '../constants/images';

const CartTab: React.FC = () => {
  const { cartItems, removeFromCart, addToCart, clearCart } = useContext(CartContext) || {};

  const calculateTotal = (): number => {
    return cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Thông báo', 'Giỏ hàng của bạn đang trống!');
      return;
    }
    Alert.alert('Thông báo', 'Thanh toán thành công!');
    clearCart?.();
  };

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  type RootStackParamList = {
    Setting: undefined;
  };

  const NavigateToProfile = () => {
    navigation.navigate('Setting');
  }

  const GoBack = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View className='flex flex-row items-center justify-between mx-5 py-5'>
        <TouchableOpacity onPress={GoBack}>
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
        <TouchableOpacity onPress={NavigateToProfile}>
          <Image
            source={icons.profile}
            className='w-8 h-8'
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
      <Text className='text-3xl font-bold text-center'>GIỎ HÀNG CỦA BẠN</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="flex flex-row items-center justify-between p-4 border-b border-gray-300">
            {/* Hình ảnh sản phẩm */}
            <Image source={item.image} style={styles.image} />

            {/* Thông tin sản phẩm */}
            <View className="flex-1 mx-4">
              <Text
                className="text-2xl font-semibold text-ellipsis overflow-hidden"
                numberOfLines={2}
              >
                {item.name}
              </Text>
              <Text className="text-orange-500 text-xl font-semibold mt-1">
                {item.price}₫
              </Text>
              <Text className="text-orange-500 text-xl font-semibold">Số lượng: {item.quantity}</Text>

              {/* Nút tăng/giảm số lượng */}
              <View className="fflex flex-row items-center justify-center mt-2 space-x-4">
                <TouchableOpacity
                  className="border border-gray-400 rounded-full p-3 mx-4"
                  onPress={() => removeFromCart?.(item.id)}
                >
                  <Text className="text-2xl font-bold text-gray-700">-</Text>
                </TouchableOpacity>

                <Text className="text-xl font-semibold mx-6 text-center">{item.quantity}</Text>

                <TouchableOpacity
                  className="bg-orange-500 rounded-full p-3 mx-4"
                  onPress={() => addToCart?.(item)}
                >
                  <Text className="text-2xl font-bold text-white">+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <Text style={styles.total}>Tổng: {calculateTotal()}₫</Text>
      <View className="flex flex-row justify-between items-center mx-4 my-8 px-4">
        <Button
          title="Làm trống"
          onPress={clearCart}
          color="#FF4D4D"
        />
        <Button
          title="Thanh toán"
          onPress={handleCheckout}
          color="#4CAF50"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'bg-gray-100' },
  item: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'bg-white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  image: { width: 160, height: 160, borderRadius: 8, marginBottom: 10 },
  itemText: { fontSize: 16 },
  total: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
});

export default CartTab;