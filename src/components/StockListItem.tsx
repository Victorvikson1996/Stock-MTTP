import { View } from 'react-native';
import React from 'react';
import { Text } from './Themed';

type Stock = {
  name: String;
  symbol: String;
  close: String;
  percent_change: String;
};

type StockListItem = {
  stock: Stock;
};

export const StockListItem = ({ stock }: StockListItem) => {
  return (
    <View>
      <Text>{stock.close}</Text>
    </View>
  );
};
