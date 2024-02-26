import { View, StyleSheet } from 'react-native';
import React from 'react';
import { Text } from './Themed';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

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
    <View style={styles.container}>
      <Text style={styles.symbol}>
        {stock.symbol} <AntDesign name='staro' size={18} color='gray' />
      </Text>
      <Text style={styles.name}>{stock.name}</Text>
      <Text>{stock.close}</Text>
      <Text>{stock.percent_change}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  symbol: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.tint
  },
  name: {
    color: 'gray'
  }
});
