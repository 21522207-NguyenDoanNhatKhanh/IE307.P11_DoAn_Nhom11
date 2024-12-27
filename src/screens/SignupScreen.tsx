import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useContext } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
} from 'react-native';
import Checkbox from 'expo-checkbox';
import { CustomButton, FormField } from '../../components';
import { icons } from '../constants';
import { UserContext } from './../../Auth/Context';
type Props = {};

const SignupScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, updateUser } = useContext(UserContext);
  const [isChecked, setIsChecked] = useState(false);
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  type RootStackParamList = {
    ForgotPassword: undefined;
    Login: undefined;
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const { email, password, confirmPassword } = form;
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Mật khẩu xác nhận không khớp!');
      return;
    }

    const newUser = { email: email, password: password };

    if (isChecked) {
      updateUser(newUser);
      Alert.alert('Đăng ký thành công!');
      navigation.navigate('Login');
    } else {
      Alert.alert('Chưa đồng ý điều khoản và dịch vụ!');
    }
  };

  const handleSignInWithProvider = () => {};
  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <Text className="text-start text-4xl font-bold ">
        Tạo một
        {'\n'} tài khoản
      </Text>
      <View>
        {/* text input */}
        <FormField
          title="Email"
          value={form.email}
          setError={setEmailError}
          error={emailError}
          handleChangeText={(e: any) => {
            setEmailError('');
            setForm({ ...form, email: e });
          }}
          placeholder="Tên đăng nhập/ Email"
          otherStyles="my-5"
        />
        <View>
          <FormField
            title="Password"
            value={form.password}
            setError={setPasswordError}
            error={emailError}
            handleChangeText={(e: any) => {
              setPasswordError('');
              setForm({ ...form, password: e });
            }}
            placeholder="Mật khẩu"
            otherStyles="my-5"
          />
          <FormField
            title="Password"
            value={form.confirmPassword}
            setError={setPasswordError}
            error={passwordError}
            handleChangeText={(e: any) => {
              setPasswordError('');
              setForm({ ...form, confirmPassword: e });
            }}
            placeholder="Xác nhận mật khẩu"
            otherStyles="my-5"
          />
          <View className="items-cente flex-row">
            <Checkbox value={isChecked} onValueChange={setIsChecked} />
            <Text className="ml-2 self-end  font-medium text-[#676767]">
              Bạn đã đồng ý với điều khoản và dịch vụ của chúng tôi
            </Text>
          </View>
        </View>
        {/* submit btn */}
        <CustomButton
          title="Đăng ký"
          handlePress={handleLogin}
          isLoading={isSubmitting}
          containerStyle="mt-7 py-5"
        />
        {/* or continue with  */}
        <View className="mt-5 self-center">
          <Text className="mt-5 self-center text-lg text-[#575757]"> - Hoặc tiếp tục với - </Text>
          <View className="mt-5 flex flex-row items-center justify-between gap-3">
            {ContinueWithData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={handleSignInWithProvider}
                  className="rounded-full border-2 border-red-500 bg-red-50 p-4">
                  <Image source={item.image} className="h-8 w-8 " resizeMode="contain" />
                </TouchableOpacity>
              );
            })}
          </View>
          <View className="mt-8 flex  flex-row items-center justify-center gap-x-2">
            <Text className="text-xl text-[#575757] ">Đã có tài khoản?</Text>
            <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text className="text-xl font-bold text-orange-500 underline ">Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;

type ContinueWithType = {
  image: ImageSourcePropType | undefined;
  id: number;
  name: string;
};

const ContinueWithData: ContinueWithType[] = [
  {
    id: 0,
    name: 'google',
    image: icons.google,
  },
  {
    id: 1,
    name: 'apple',
    image: icons.apple,
  },
  {
    id: 2,
    name: 'facebook',
    image: icons.facebook,
  },
];
