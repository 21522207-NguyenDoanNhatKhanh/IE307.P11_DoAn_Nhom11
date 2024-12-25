import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { icons } from '../constants';
import { CustomButton, CustomWrapper, DetailsItem } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteStackParamList } from '~/app/index';

type Props = {};
import { UserContext } from './../../components/Context';
const SettingTab = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RouteStackParamList>>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSingout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };
  const handleSignInWithProvider = () => { };
  const handleNavigateToHome = () => {
    navigation.navigate('HomeScreen');
  };
  const handleEditPic = () => { };
  const { user, updateUser, address, updateAddress, bankDetails, updateBankDetails } =
    useContext(UserContext);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const [pinCode, setPinCode] = useState(address.pinCode);
  const [street, setStreet] = useState(address.street);
  const [country, setCountry] = useState(address.country);

  const [accountNumber, setAccountNumber] = useState(bankDetails.accountNumber);
  const [ownerName, setOwnerName] = useState(bankDetails.ownerName);
  const [bankCode, setBankCode] = useState(bankDetails.bankCode);
  // lưu thông tin ban đầu
  const [initialInfo, setInitialInfo] = useState({
    email,
    password,
    pinCode,
    street,
    country,
    accountNumber,
    ownerName,
    bankCode,
  });
  // console.log(initialInfo);
  // Hàm kiểm tra sự thay đổi
  const checkIfChanged = () => {
    return (
      email !== initialInfo.email ||
      password !== initialInfo.password ||
      pinCode !== initialInfo.pinCode ||
      street !== initialInfo.street ||
      country !== initialInfo.country ||
      accountNumber !== initialInfo.accountNumber ||
      ownerName !== initialInfo.ownerName ||
      bankCode !== initialInfo.bankCode
    );
  };
  const handleInfo = () => {
    updateUser({ email, password });
    updateAddress({ pinCode, street, country });
    updateBankDetails({ accountNumber, ownerName, bankCode });
    if (checkIfChanged()) {
      setInitialInfo({
        email,
        password,
        pinCode,
        street,
        country,
        accountNumber,
        ownerName,
        bankCode,
      });
      Alert.alert('Thông tin đã được lưu thành công!');
    } else {
      Alert.alert('Bạn chưa thay đổi thông tin!');
    }
  };
  return (
    <CustomWrapper>
      <View className="px-3 pt-2">
        {/* image profile */}
        <View className="flex items-center justify-center">
          <Image source={icons.profile} className="h-40 w-40 rounded-full " />
          <TouchableOpacity
            onPress={handleEditPic}
            className=" absolute bottom-3 right-[31%] items-center  justify-center rounded-full border border-white bg-blue-500 p-2">
            <Image source={icons.pen} className=" h-6 w-6" />
          </TouchableOpacity>
        </View>
        {/* Personal Details */}
        <View>
          <Text className="text-2xl font-bold text-black-100">Thông tin cá nhân</Text>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Email</Text>
            <TextInput
              placeholder={email}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="blue"
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Password</Text>
            <TextInput
              placeholder={password}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setPassword}
              value={password}
            />
          </View>
        </View>
        <View className="my-5 h-px w-full bg-black-100/20" />

        {/* Business info */}
        <View className="mt-4">
          <Text className="text-2xl font-bold text-black-100">Địa chỉ</Text>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Mã pin</Text>
            <TextInput
              placeholder={pinCode}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setPinCode}
              value={pinCode}
            />
          </View>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Địa chỉ</Text>
            <TextInput
              placeholder={street}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setStreet}
              value={street}
            />
          </View>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Thành phố</Text>
            <TextInput
              placeholder={country}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setCountry}
              value={country}
            />
          </View>
        </View>
        <View className="my-5 h-px w-full bg-black-100/20" />
        {/* Bank Account Details */}
        <View className="my-4">
          <Text className="text-2xl font-bold text-black-100">Thông tin thẻ ngân hàng</Text>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Số tài khoản</Text>
            <TextInput
              placeholder={accountNumber}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setAccountNumber}
              value={accountNumber}
            />
          </View>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Tên chủ sở hữu</Text>
            <TextInput
              placeholder={ownerName}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setOwnerName}
              value={ownerName}
            />
          </View>
          <View className="mt-3 flex flex-col">
            <Text className="text-xl font-normal text-black-100">Mã ngân hàng</Text>
            <TextInput
              placeholder={bankCode}
              className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
              placeholderTextColor="#0F0E0E73"
              onChangeText={setBankCode}
              value={bankCode}
            />
          </View>
        </View>
        {/* save changes */}        
        <View className="flex-row justify-between mt-5">
          <CustomButton
            title="Lưu"
            handlePress={handleInfo}
            isLoading={isSubmitting}
            containerStyle="flex-1 py-3 mx-1 bg-[#4CAF50] rounded-lg"
          />
          <CustomButton
            title="Đăng xuất"
            handlePress={handleSingout}
            isLoading={isSubmitting}
            containerStyle="flex-1 py-3 mx-1 bg-red-500 rounded-lg"
          />
        </View>
        <CustomButton
          title="Trang chủ"
          handlePress={handleNavigateToHome}
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
    placeholder: '21522207@gm.uit.edu.vn',
  },
  {
    id: 1,
    title: 'Mật khẩu',
    placeholder: '******',
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
    placeholder: 'Khu phố 6, P. Linh Trung',
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
