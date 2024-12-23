import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useContext } from 'react';
import { Alert, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton, FormField } from '../../components';
import { icons } from '../constants';

type Props = {};
import { UserContext } from '../../Auth/Context';
const LoginScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({
    email: '',
    username: '',
    password: '',
  });
  type RootStackParamList = {
    ForgotPassword: undefined;
    Signup: undefined;
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  console.log(user.email);
  console.log(user.password);
  const handleLogin = () => {
    // if (!user.email || !user.password) {
    //   alert('Vui lòng nhập đầy đủ thông tin!');
    //   return;
    // }
    if (!user || !user.email || !user.password) {
      alert('Bạn chưa đăng ký tài khoản!');
      return;
    }
    const { email, password } = form;
    if (email === user.email && password === user.password) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        Alert.alert('Đăng nhập thành công', 'Chào mừng!');
        navigation.navigate('GetStarted');
      }, 900);
    } else {
      Alert.alert('Sai thông tin đăng nhập!');
    }
  };
  const handleSignInWithProvider = () => {};
  const handleNavigateToSignUp = () => {
    navigation.navigate('Signup');
  };
  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <Text className="text-start text-4xl font-bold">Chào mừng {'\n'} trở lại!</Text>
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
          placeholder="Tên đăng nhập"
          otherStyles="mt-5"
        />
        <View className="my-5">
          <FormField
            title="Password"
            value={form.password}
            setError={setPasswordError}
            error={passwordError}
            handleChangeText={(e: any) => {
              setPasswordError('');
              setForm({ ...form, password: e });
            }}
            placeholder="Mật khẩu"
            otherStyles="mt-5"
          />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="self-end text-lg font-medium text-orange-500">Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        {/* submit btn */}
        <CustomButton
          title="Đăng nhập"
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
            <Text className="text-xl text-[#575757] ">Tạo tài khoảng bằng cách</Text>
            <TouchableOpacity onPress={handleNavigateToSignUp}>
              <Text className="text-xl font-bold text-orange-500 underline ">Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
