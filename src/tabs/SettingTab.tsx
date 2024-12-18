import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {icons} from '../constants';
import {CustomButton, CustomWrapper, DetailsItem} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteStackParamList} from '~/app/index'

type Props = {};

const SettingTab = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList>>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSingout = () => {
    navigation.navigate('Login');
  };
  const handleSignInWithProvider = () => {};
  const handleNavigateToSignUp = () => {
    navigation.navigate('Signup');
  };
  const handleEditPic = () => {};
  return (
    <CustomWrapper>
      <View className="pt-2 px-3">
        {/* image profile */}
        <View className="flex justify-center items-center">
          <Image source={icons.profile} className="w-40 h-40 rounded-full " />
          <TouchableOpacity
            onPress={handleEditPic}
            className=" p-2 border-white border rounded-full  bg-blue-500 absolute bottom-3 right-[31%] items-center justify-center">
            <Image source={icons.pen} className=" w-6 h-6" />
          </TouchableOpacity>
        </View>
        {/* Personal Details */}
        <View>
          <Text className="text-2xl font-bold text-black-100">
            Thông tin cá nhân
          </Text>
          <FlatList
            data={personalDetailsData}
            renderItem={({item}) => (
              <DetailsItem title={item.title} placeholder={item.placeholder} />
            )}
            keyExtractor={item => item.id.toString()} // have to be in string format
          />
        </View>
        <View className="h-px w-full my-5 bg-black-100/20" />
        {/* Business info */}
        <View className="mt-4">
          <Text className="text-2xl font-bold text-black-100">
            Địa chỉ 
          </Text>
          <FlatList
            data={businessData}
            renderItem={({item}) => (
              <DetailsItem title={item.title} placeholder={item.placeholder} />
            )}
            keyExtractor={item => item.id.toString()} // have to be in string format
          />
        </View>
        <View className="h-px w-full my-5 bg-black-100/20" />
        {/* Bank Account Details */}
        <View className="my-4">
          <Text className="text-2xl font-bold text-black-100">
            Thông tin thẻ ngân hàng
          </Text>
          <FlatList
            data={bankData}
            renderItem={({item}) => (
              <DetailsItem title={item.title} placeholder={item.placeholder} />
            )}
            keyExtractor={item => item.id.toString()} // have to be in string format
          />
        </View>
        {/* save changes */}
        <CustomButton
          title="Đăng xuất"
          handlePress={handleSingout}
          isLoading={isSubmitting}
          containerStyle="mt-7 py-5"
        />
      </View>
    </CustomWrapper>
  );
};

export default SettingTab;

interface personalDetailsDataType {
  id: number;
  title: string;
  placeholder: string;
}

const personalDetailsData: personalDetailsDataType[] = [
  {
    id: 0,
    title: 'Email',
    placeholder: 'nhom16_ie307p11@gm.uit.edu.vnvn',
  },
  {
    id: 1,
    title: 'Mật khẩu',
    placeholder: 'Mật khẩu',
  },
];

const businessData: personalDetailsDataType[] = [
  {
    id: 0,
    title: 'Mã pin',
    placeholder: '1234231',
  },
  {
    id: 1,
    title: 'Địa chỉ',
    placeholder: "Khu phố 6, P. Linh Trung",
  },
  {
    id: 2,
    title: 'Thành phố',
    placeholder: 'Hồ Chí Minh',
  },
  {
    id: 3,
    title: 'Quận',
    placeholder: 'Thủ Đức',
  },
  {
    id: 4,
    title: 'Quốc gia',
    placeholder: 'Việt Nam',
  },
];
const bankData: personalDetailsDataType[] = [
  {
    id: 0,
    title: 'Số tài khoản',
    placeholder: '204356XXXXXXX',
  },
  {
    id: 1,
    title: 'Tên chủ sở hữu',
    placeholder: 'Nhóm 16',
  },
  {
    id: 2,
    title: 'Mã ngân hàng',
    placeholder: '2chanBank',
  },
];
