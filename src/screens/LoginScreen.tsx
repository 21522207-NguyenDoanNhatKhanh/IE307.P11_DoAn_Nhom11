import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomButton, FormField} from '../../components';
import {icons} from '../constants';

type Props = {};

const LoginScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleLogin = () => {
    const {email, password} = form;
    if (email === '21522207@gm.uit.edu.vn' && password === '123456') {
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
    <View className="px-5 flex-1 bg-white pt-5">
      <Text className="text-4xl font-bold text-start">
        Chào mừng {'\n'} trở lại!
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
          placeholder="Tên đăng nhập"
          otherStyles="mt-5"
        />
        <View className='my-5'>
          <FormField
            title="Password"
            value={form.password}
            setError={setPasswordError}
            error={passwordError}
            handleChangeText={(e: any) => {
              setPasswordError('');
              setForm({...form, password: e});
            }}
            placeholder="Mật khẩu"
            otherStyles="mt-5"
          />
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="text-orange-500 text-lg font-medium self-end">
              Quên mật khẩu?
            </Text>
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
            <Text className="text-[#575757] text-xl ">Tạo tài khoảng bằng cách</Text>
            <TouchableOpacity onPress={handleNavigateToSignUp}>
              <Text className="text-xl font-bold underline text-orange-500 ">
                Đăng ký
              </Text>
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