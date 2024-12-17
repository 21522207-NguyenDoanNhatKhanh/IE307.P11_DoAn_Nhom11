import {View, Text} from 'react-native';
import React from 'react';
import { RouteProp } from '@react-navigation/native';

type Props = {};
type ScreenRouteProps = RouteProp<RootStackParamList, 'Search'>;
type RootStackParamList = {
  Search: {query: string} | undefined;
};

interface SearchProps {
  route: ScreenRouteProps;
}

const SearchTab: React.FC<SearchProps> = ({route}) => {
  const {query} = route.params || {}
  return (
    <View>
      <Text>SearchTab</Text>
      <Text>Search for {query}</Text>
    </View>
  );
};

export default SearchTab;
