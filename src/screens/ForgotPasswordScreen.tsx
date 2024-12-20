import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { CustomButton, FormField } from '../../components';

type RootStackParamList = {
  Login: undefined;
};

type Props = {};

const ForgotPasswordScreen = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSendResetLink = () => {
    if (!email) {
      setEmailError('Email không được để trống');
      return;
    }
    if (!email.includes('@')) {
      setEmailError('Vui lòng nhập email hợp lệ');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      Alert.alert('Thành công', 'Liên kết đặt lại mật khẩu đã được gửi tới email của bạn');
      navigation.navigate('Login');
    }, 1000);
  };

  const handleBackToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View className="px-5 flex-1 bg-white pt-5">
      <Text className="text-4xl font-bold text-start">
        Quên mật khẩu
      </Text>
      <Text className="text-lg text-[#575757] mt-3">
        Nhập email của bạn để nhận liên kết đặt lại mật khẩu
      </Text>

      <View className="mt-8">
        <FormField
          title="Email"
          value={email}
          setError={setEmailError}
          error={emailError}
          handleChangeText={(e: string) => {
            setEmailError('');
            setEmail(e);
          }}
          placeholder="Nhập email"
        />
      </View>

      <CustomButton
        title="Gửi liên kết"
        handlePress={handleSendResetLink}
        isLoading={isSubmitting}
        containerStyle="mt-7 py-5"
      />

      <TouchableOpacity onPress={handleBackToLogin} className="mt-5 self-center">
        <Text className="text-lg font-medium text-orange-500">
          Quay lại đăng nhập
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
