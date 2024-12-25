import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: 'nhom11', password: '12345' });
  const [address, setAddress] = useState({
    pinCode: '12345',
    street: 'Linh Trung',
    city: 'Thủ Đức',
    country: 'Hồ Chí Minh',
  });
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '123456789',
    ownerName: 'nhom11',
    bankCode: '12345',
  });

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedAddress = await AsyncStorage.getItem('address');
        const storedBankDetails = await AsyncStorage.getItem('bankDetails');

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedAddress) setAddress(JSON.parse(storedAddress));
        if (storedBankDetails) setBankDetails(JSON.parse(storedBankDetails));
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    };

    loadSettings();
  }, []);
  const saveSettings = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
    }
  };

  // Cập nhật user
  const updateUser = (newUser) => {
    setUser(newUser);
    saveSettings('user', newUser);
  };

  // Cập nhật address
  const updateAddress = (newAddress) => {
    setAddress(newAddress);
    saveSettings('address', newAddress);
  };

  // Cập nhật bank details
  const updateBankDetails = (newBankDetails) => {
    setBankDetails(newBankDetails);
    saveSettings('bankDetails', newBankDetails);
  };
  return (
    <UserContext.Provider
      value={{ user, updateUser, address, updateAddress, bankDetails, updateBankDetails }}>
      {children}
    </UserContext.Provider>
  );
};
