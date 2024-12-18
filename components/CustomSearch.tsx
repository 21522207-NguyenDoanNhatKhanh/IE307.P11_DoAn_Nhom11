import { RouteProp, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "expo-router";
import React, { useState } from "react"
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { icons } from "~/src/constants";

type CustomSearchProps = {
    placeholder?: string;
    initialQuery: string;
}

type ScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Search'>;
type ScreenRouteProps = RouteProp<RootStackParamList, 'Search'>;
type RootStackParamList = {
    Search: { query: string } | undefined;
};

const CustomSearch: React.FC<CustomSearchProps> = ({
    placeholder,
    initialQuery,
}) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute();
    const [query, setQuery] = useState('' || initialQuery);

    const handlePress = () => {
        if (query === "") {
            return Alert.alert(
                "!!Hãy nhập tên món ănăn"
            );
        } else {
            navigation.navigate('Search', { query });
            setQuery("")
        }
    }

    return (
        <View className="mx-3 mt-3">
            <View className="flex flex-row items-center justify-between bg-white w-full rounded-xl pr-5 h-16">
                <TouchableOpacity onPress={handlePress}>
                    <Image
                        source={icons.search}
                        className="w-6 h-6 mx-5"
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TextInput
                    placeholder={placeholder || 'Bạn mún ăn rì :>?'}
                    value={query}
                    onChangeText={(e: string) => setQuery(e)}
                    className="text-[#bbbbbb] text-lg font-pregular bg-white"
                    placeholderTextColor={'#bbbbbb'}
                    onSubmitEditing={handlePress}
                />
                <Image
                    source={icons.mic}
                    className="w-8 h-8"
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

export default CustomSearch;