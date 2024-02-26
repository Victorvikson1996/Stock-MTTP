import { StyleSheet, FlatList, View } from 'react-native';
import { Text } from '@/src/components/Themed';
import { Stack } from 'expo-router';
import top5 from '@/assets/data/top5.json';
import { StockListItem } from '@/src/components/StockListItem';

export default function TabOneScreen() {
  const stocks = Object.values(top5);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Stocks' }} />
      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  content: {
    gap: 20,
    padding: 10
  }
});
