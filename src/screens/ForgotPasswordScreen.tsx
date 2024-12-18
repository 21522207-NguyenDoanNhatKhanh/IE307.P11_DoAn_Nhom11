// import {View, Text} from 'react-native';
// import React from 'react';

// type Props = {}

// const ForgotPasswordScreen = (props: Props) => {
//   return (
//     <View>
//       <Text>ForgotPasswordScreen</Text>
//     </View>
//   );
// };

// export default ForgotPasswordScreen;

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton, FormField } from '../../components';
import { icons } from '../constants';

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

  const handleLogin = () => {};
  const handleSignInWithProvider = () => {};
  const handleNavigateToSignUp = () => {
    navigation.navigate('Signup');
  };
  return (
    <View className="flex-1 bg-white px-5 pt-5">
      <Text className="text-start text-4xl font-bold">Forgot password?</Text>
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
          placeholder="username or email"
          otherStyles="mt-5"
        />

        {/* submit btn */}
        <CustomButton
          title="Submit"
          handlePress={handleLogin}
          isLoading={isSubmitting}
          containerStyle="mt-7 py-5"
        />
        {/* or continue with  */}
        <View className="mt-5 self-center">
          <Text className="mt-5 self-center text-lg text-[#575757]">
            {' '}
            We will send you a message to set or reset your new password{' '}
          </Text>
          <View className="mt-3 flex  flex-row items-center justify-center gap-x-2">
            <Text className="text-xl text-[#575757] ">Create An Account</Text>
            <TouchableOpacity onPress={handleNavigateToSignUp}>
              <Text className="text-xl font-bold text-action underline ">Sign Up</Text>
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
