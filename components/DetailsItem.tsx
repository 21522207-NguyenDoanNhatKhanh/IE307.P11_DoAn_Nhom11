import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
interface DetailsItemProps {
  title: string;
  placeholder: string;
}
type RootStackParamList = {
  ForgotPassword: undefined;
  Signup: undefined;
};
const DetailsItem: React.FC<DetailsItemProps> = ({ title, placeholder }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [changes, setChanges] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <View className="mt-3 flex flex-col">
      <Text className="text-xl font-normal text-black-100">{title}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          className="mt-1 rounded-xl border border-neutral-500 px-2 py-4 text-lg font-semibold text-black-100"
          placeholderTextColor={'#0F0E0E73'}
          onChangeText={(e: string) => setChanges(e)}
          value={changes}
          secureTextEntry={title === 'Password' && !showPassword} // hide it if it's the password... | set showpassword to false
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text className="self-end text-lg font-medium text-red-600">Forgot Password?</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default DetailsItem;
