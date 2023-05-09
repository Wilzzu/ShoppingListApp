/**
 * Shopping List App
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './src/Components/Header/Header';
import AddItem, {IItem} from './src/Components/AddItem/AddItem';
import ListItem from './src/Components/ListItem/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App(): JSX.Element {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]);

  // Fetch shoppingList from local storage and set it as current shoppingList
  const getLocalData = async () => {
    try {
      const json = await AsyncStorage.getItem('@shoppingList');
      if (json != null && JSON.parse(json).length) {
        setShoppingList(JSON.parse(json));
      }
    } catch (e) {
      console.log(e);
    }
  };

  // Save current shoppingList to local storage
  const setLocalData = async (data: IItem[]) => {
    try {
      const json = JSON.stringify(data);
      await AsyncStorage.setItem('@shoppingList', json);
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  // On app startup fetch local storage
  useEffect(() => {
    getLocalData();
  }, []);

  // Remove item
  const removeItem = (id: string) => {
    const filteredList = shoppingList.filter(e => e.id !== id);
    setLocalData(filteredList);
    setShoppingList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shopping List App"></Header>
      <View style={styles.contentWrapper}>
        {/* Item form */}
        <AddItem
          shoppingList={shoppingList}
          setShoppingList={setShoppingList}
          setLocalData={setLocalData}
        />
        {/* List items */}
        <FlatList
          data={shoppingList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            // Single item
            <ListItem
              id={item.id}
              item={item.item}
              quantity={item.quantity}
              removeItem={removeItem}
            />
          )}
          ListEmptyComponent={() => (
            // No items warning
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
