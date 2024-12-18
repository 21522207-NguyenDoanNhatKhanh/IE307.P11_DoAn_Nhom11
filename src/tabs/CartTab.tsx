import { View, Text, Image } from 'react-native';
import React from 'react';

type Props = {};

const CartTab = (props: Props) => {
  return (
    <View>
      <Text>CartTab</Text>
      <Image></Image>
    </View>
  );
};

export default CartTab;

// import React from 'react';
// import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// const CartScreen = ({ route, navigation }) => {
//   // Nh?n d? li?u t? route
//   const { itemDetails } = route.params;

//   // M� ph?ng danh s�ch s?n ph?m trong gi? h�ng
//   const cartItems = [
//     itemDetails, // s?n ph?m ��?c th�m t? m�n h?nh tr�?c
//     {
//       image:
//         'https://file.hstatic.net/200000876585/file/banh-mi_c73e9e7bcf8f4aa78577aa5d4293e3e8.png',
//       title: 'B�nh m? Ph�p',
//       description: 'B�nh m? n�?ng gi?n tan v?i b� Ph�p',
//       price: 4500,
//       quantity: 2,
//     },
//   ];

//   // T�nh t?ng gi� ti?n
//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * (item.quantity || 1),
//     0
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Gi? H�ng</Text>

//       <FlatList
//         data={cartItems}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.cartItem}>
//             <Image source={{ uri: item.image }} style={styles.image} />
//             <View style={styles.itemInfo}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.description}>{item.description}</Text>
//               <Text style={styles.price}>{item.price} VND</Text>
//               {item.quantity && <Text style={styles.quantity}>S? l�?ng: {item.quantity}</Text>}
//             </View>
//           </View>
//         )}
//       />

//       <View style={styles.footer}>
//         <Text style={styles.totalPrice}>T?ng c?ng: {totalPrice} VND</Text>
//         <TouchableOpacity style={styles.orderButton} onPress={() => alert('�?t h�ng th�nh c�ng!')}>
//           <Text style={styles.orderButtonText}>�?t H�ng</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   cartItem: {
//     flexDirection: 'row',
//     marginBottom: 10,
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//     borderRadius: 8,
//   },
//   image: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 10,
//   },
//   itemInfo: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//     marginVertical: 4,
//   },
//   price: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: 'bold',
//   },
//   quantity: {
//     fontSize: 14,
//     color: '#999',
//   },
//   footer: {
//     marginTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//     paddingTop: 10,
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   orderButton: {
//     backgroundColor: '#ff7f50',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   orderButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CartScreen;
