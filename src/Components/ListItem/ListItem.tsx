import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  item: string;
  quantity: string;
}

const ListItem: React.FC<Props> = ({item, quantity}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemInfo}>
        <Text style={styles.quantityBlock}>{quantity + 'x'}</Text>
        <Text style={styles.itemName}>{item}</Text>
      </View>
      <TouchableOpacity style={styles.removeBtn}>
        <Text>X</Text>
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
    paddingVertical: 3,
    paddingHorizontal: 8,
    backgroundColor: '#DCDBD7',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#BEBDB9',
  },
});

export default ListItem;
