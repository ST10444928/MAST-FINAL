import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';

const ManageMenuScreen = ({ navigation }) => {
  const [menuData, setMenuData] = useState([]);  // Get dishes passed from HomeScreen
  const [newDish, setNewDish] = useState({ name: '', description: '', price: '' });

  // Function to add a new dish to the menu
  const addDish = () => {
    if (newDish.name && newDish.description && newDish.price) {
      const updatedMenu = [
        ...menuData,
        { id: menuData.length + 1, name: newDish.name, description: newDish.description, price: parseFloat(newDish.price) },
      ];
      setMenuData(updatedMenu);
      setNewDish({ name: '', description: '', price: '' });
    } else {
      Alert.alert('Error', 'Please fill in all fields.');
    }
  };

  // Function to remove a dish from the menu
  const removeDish = (id) => {
    const updatedMenu = menuData.filter((dish) => dish.id !== id);
    setMenuData(updatedMenu);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Menu</Text>

      {/* Add Dish Form */}
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={newDish.name}
        onChangeText={(text) => setNewDish({ ...newDish, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={newDish.description}
        onChangeText={(text) => setNewDish({ ...newDish, description: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={newDish.price}
        onChangeText={(text) => setNewDish({ ...newDish, price: text })}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.addButton} onPress={addDish}>
        <Text style={styles.addButtonText}>Add Dish</Text>
      </TouchableOpacity>

      {/* Display Menu Items with Remove Button */}
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.dishContainer}>
            <Text style={styles.dishTitle}>{item.name}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            <Text style={styles.dishPrice}>R{item.price}</Text>
            <TouchableOpacity style={styles.removeButton} onPress={() => removeDish(item.id)}>
              <Text style={styles.removeButtonText}>Remove Dish</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Navigate back to HomeScreen with updated menu */}
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Home', { dishes: menuData })}>
        <Text style={styles.saveButtonText}>Save Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  dishTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dishDescription: {
    fontSize: 14,
    color: '#666',
  },
  dishPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ManageMenuScreen;
