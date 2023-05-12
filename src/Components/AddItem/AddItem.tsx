// Form for adding items

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

// Create interface for item
export interface IItem {
  id: string;
  item: string;
  quantity: string;
}

// Create interface for props
interface Props {
  shoppingList: IItem[];
  setShoppingList: React.Dispatch<React.SetStateAction<IItem[]>>;
  setLocalData(data: IItem[]): any;
}

const AddItem: React.FC<Props> = ({
  shoppingList,
  setShoppingList,
  setLocalData,
}) => {
  // States for saving user input
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');

  //   Function for adding new item
  const addItem = () => {
    // Send an alert if no name for the item
    if (!item) {
      Alert.alert('No item yet!', 'Define the name first');
    }
    // Send an alert if wrong type on quantity
    else if (quantity && !Number(quantity)) {
      Alert.alert(
        'Quantity must be a number!',
        'Change the quantity amount to a number',
      );
    }
    // Create new item with user's inputs and unique ID
    else {
      const newEntry = [
        ...shoppingList,
        {id: uuid.v4().toString(), item, quantity: quantity || '1'},
      ];

      setShoppingList(newEntry);
      setLocalData(newEntry);

      // Clear input fields
      setItem('');
      setQuantity('');
    }
  };

  return (
    <View>
      {/* Title */}
      <Text style={styles.heading}>Add Shopping Item</Text>
      {/* Main container for inputs */}
      <View style={styles.form}>
        {/* Item name input */}
        <TextInput
          style={styles.input}
          placeholder="Enter item"
          value={item}
          onChangeText={text => setItem(text)}
        />
        {/* Quantity input */}
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          keyboardType="numeric"
          value={quantity}
          onChangeText={q => setQuantity(q)}
        />
        {/* Add button */}
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
