// import { View, Text, Image } from 'react-native';
// import React from 'react';

// type Props = {};

// const CartTab = (props: Props) => {
//   return (
//     <View>
//       <Text>CartTab</Text>
//       <Image></Image>
//     </View>
//   );
// };

// export default CartTab;

import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = ({ route, navigation }) => {
  // Nh?n d? li?u t? route
  // const { itemDetails } = route.params;
  const { itemDetails } = route.params || {};
  // Mô ph?ng danh sách s?n ph?m trong gi? hàng
  const cartItems = [
    itemDetails, // s?n ph?m đư?c thêm t? màn h?nh trư?c
    {
      image:
        'https://file.hstatic.net/200000876585/file/banh-mi_a72c6378d380481e8bca31de79499778.png',
      title: 'Bánh mì Pháp',
      description: 'Bánh bơ Pháp',
      price: 4500,
      quantity: 2,
    },
    {
      image:
        'https://file.hstatic.net/200000876585/file/banh-mi-pho-mai_59a318798bdd4b2493ff4435adf51498.png',
      title: 'Bánh mì Pháp',
      description: 'Bánh bơ Pháp',
      price: 4500,
      quantity: 2,
    },
    {
      image:
        'https://file.hstatic.net/200000876585/file/tiramiru_be4d9de5bf194f12ba63f2ff476012e2.png',
      title: 'Bánh mì Pháp',
      description: 'Bánh bơ Pháp',
      price: 4500,
      quantity: 2,
    },
  ];

  // Tính t?ng giá ti?n
  const totalPrice = cartItems.reduce(
    (total, item) => total + item?.price * (item?.quantity || 1),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Giỏ Hàng</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item?.image }} style={styles.image} />
            <View style={styles.itemInfo}>
              <Text style={styles.title}>{item?.title}</Text>
              <Text style={styles.description}>{item?.description}</Text>
              <Text style={styles.price}>{item?.price} VND</Text>
              {item?.quantity && <Text style={styles.quantity}>Số lượng: {item?.quantity}</Text>}
            </View>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Tổng cộng: {totalPrice} VND</Text>
        <TouchableOpacity style={styles.orderButton} onPress={() => alert('Đặt hàng thành công!')}>
          <Text style={styles.orderButtonText}>Đặt Hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    color: '#999',
  },
  footer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#ff7f50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartScreen;
