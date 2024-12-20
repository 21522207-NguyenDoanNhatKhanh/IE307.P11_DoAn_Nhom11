import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface CategoryParams {
  details: {
    _id?: string;
    name?: string;
    image?: any;
    onPress?: () => void;
  };
  catProps: {
    activeCat?: string;
    onPressCat?: () => void;
  };
}

type RootStackParamList = {
  MenuList: undefined; // Thêm kiểu cho navigation params
};

const CategoryCard = ({ details, catProps }: CategoryParams) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  let isActive = details._id === catProps.activeCat;
  let borderColor = isActive ? 'orange' : 'grey';
  let bgColor = isActive ? 'orange' : 'white';
  let textColor = isActive ? 'orange' : 'black';

  const handlePress = () => {
    navigation.navigate('MenuList'); // Điều hướng đến trang MenuList
    if (catProps.onPressCat) {
      catProps.onPressCat(); // Gọi hàm onPressCat nếu có
    }
  };

  return (
    <View>
      <TouchableOpacity style={style.container} onPress={handlePress}>
        <View
          style={[style.imageContainer, { backgroundColor: bgColor, borderColor: borderColor }]}
        >
          <Image
            source={details.image}
            style={{ width: 55, height: 55, resizeMode: 'contain' }}
          />
        </View>
        <Text style={[style.catName, { color: textColor }]}>{details.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryCard;

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 3,
    margin: 3,
  },
  imageContainer: {
    borderRadius: 20,
    padding: 3,
  },
  catName: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
