/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './src/Components/Header/Header';
import AddItem, {IItem} from './src/Components/AddItem/AddItem';
import ListItem from './src/Components/ListItem/ListItem';

function App(): JSX.Element {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List App"></Header>

      <View style={styles.contentWrapper}>
        <AddItem
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
        />
        <FlatList
          data={shoppingList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ListItem item={item.item} quantity={item.quantity} />
          )}
          ListEmptyComponent={() => (
            <Text style={{color: 'red', alignSelf: 'center', paddingTop: 20}}>
              No items in the Shopping cart yet
            </Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
    flex: 1,
  },
});

export default App;
