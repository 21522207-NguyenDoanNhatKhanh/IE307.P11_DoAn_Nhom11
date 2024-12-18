import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton, FormField} from '../../components';
import {icons} from '../constants';

type Props = {};
// let's go with get started first
const SignupScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleLogin = () => {};
  const handleSignInWithProvider = () => {};
  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View className="px-5 flex-1 bg-white pt-5">
      <Text className="text-4xl font-bold text-start ">
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
            setForm({...form, email: e});
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
              setForm({...form, password: e});
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
              setForm({...form, password: e});
            }}
            placeholder="Xác nhận mật khẩu"
            otherStyles="my-5"
          />

          <Text className="text-[#676767] text-lg font-medium self-end">
            Khi nhấn vào nút <Text className="text-orange-600">Đăng ký</Text>{' '}
            , bạn đã đồng ý với điều khoản và dịch vụ của chúng tôi
          </Text>
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
          <Text className="text-[#575757] text-lg self-center mt-5">
            {' '}
            - Hoặc tiếp tục với -{' '}
          </Text>
          <View className="flex flex-row items-center gap-3 mt-5 justify-between">
            {ContinueWithData.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={handleSignInWithProvider}
                  className="rounded-full border-2 bg-red-50 border-red-500 p-4">
                  <Image
                    source={item.image}
                    className="w-8 h-8 "
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View className="flex flex-row  items-center gap-x-2 justify-center mt-8">
            <Text className="text-[#575757] text-xl ">
              Đã có tài khoản?
            </Text>
            <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text className="text-xl font-bold underline text-orange-500 ">
                Đăng nhập
              </Text>
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