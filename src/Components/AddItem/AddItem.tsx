import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import uuid from 'react-native-uuid';

export interface IItem {
  id: string;
  item: string;
  quantity: string;
}
interface Props {
  shoppingList: IItem[];
  setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
}

const AddItem: React.FC<Props> = ({shoppingList, setShoppingList}) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const addItem = () => {
    if (!item) {
      Alert.alert('No item yet!', 'Define the name first');
    } else if (quantity && !Number(quantity)) {
      Alert.alert(
        'Quantity must be a number!',
        'Change the quantity amount to a number',
      );
    } else {
      setShoppingList([
        ...shoppingList,
        {id: uuid.v4().toString(), item, quantity: quantity || '1'},
      ]);
    }
    setItem('');
    setQuantity('');
  };

  return (
    <View>
      <Text style={styles.heading}>Add Shopping Item</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={item}
          onChangeText={text => setItem(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={q => setQuantity(q)}
        />
        <TouchableOpacity
          style={styles.addItemsButton}
          onPress={() => {
            addItem();
          }}>
          <Text style={styles.buttonText}>Add item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginTop: 30,
  },
  input: {
    padding: 15,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  addItemsButton: {
    backgroundColor: '#eb8634',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: '500'},
});

export default AddItem;
