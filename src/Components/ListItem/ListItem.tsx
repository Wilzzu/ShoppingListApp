// Single item information

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Create interface for props
interface Props {
  id: string;
  item: string;
  quantity: string;
  removeItem(id: string): any;
}

const ListItem: React.FC<Props> = ({id, item, quantity, removeItem}) => {
  return (
    <View style={styles.itemContainer}>
      {/* Item quantity and name container*/}
      <View style={styles.itemInfo}>
        <Text style={styles.quantityBlock}>{quantity + 'x'}</Text>
        <Text style={styles.itemName}>{item}</Text>
      </View>
      {/* Delete button */}
      <TouchableOpacity style={styles.removeBtn} onPress={() => removeItem(id)}>
        <Icon name="trash-2" size={24} color="#eb8634" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  itemInfo: {flex: 1, flexDirection: 'row', gap: 4},
  itemName: {paddingVertical: 3},
  quantityBlock: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    backgroundColor: '#DCDBD7',
    borderRadius: 2,
  },
  removeBtn: {
    padding: 4,
    backgroundColor: '#DCDBD7',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#BEBDB9',
  },
});

export default ListItem;
