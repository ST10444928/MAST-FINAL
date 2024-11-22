import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [chefDishes, setChefDishes] = useState([
    {
      id: 1,
      name: "Chef's Special Pizza",
      description: "A delightful Pizza with fresh ingredients and house-made toppings.",
    },
    {
      id: 2,
      name: "Combo Deals",
      description: "Grilled Tomahawk, Ribs, Lamb Chomps and Sides of choice.",
    },
  ]);

  const [newDish, setNewDish] = useState({ name: '', description: '' });
  const [selectedDishId, setSelectedDishId] = useState(chefDishes[0]?.id || null);

  const addDish = () => {
    if (newDish.name && newDish.description) {
      const updatedDishes = [...chefDishes, { id: chefDishes.length + 1, ...newDish }];
      setChefDishes(updatedDishes);
      setNewDish({ name: '', description: '' });
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const removeDish = (id) => {
    const updatedDishes = chefDishes.filter((dish) => dish.id !== id);
    setChefDishes(updatedDishes);
    if (selectedDishId === id) setSelectedDishId(null);
  };

  const selectedDish = chefDishes.find(dish => dish.id === selectedDishId);

  const [averagePrices, setAveragePrices] = useState({});

useEffect(() => {
  const calculateAveragePrices = () => {
    const averages = {};
    for (const course in menuData) {
      const items = menuData[course];
      const total = items.reduce((sum, item) => sum + item.price, 0);
      averages[course] = (total / items.length).toFixed(2);
    }
    setAveragePrices(averages);
  };
  calculateAveragePrices();
}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our Restaurant!</Text>
      <Text style={styles.subtitle}>Select a Dish</Text>

      <Text style={styles.subtitle}>Average Prices Per Course</Text>

    {/* Display average prices */}
    {Object.entries(averagePrices).map(([course, avgPrice]) => (
    <Text key={course} style={styles.averageText}>
        {course}: R{avgPrice}
    </Text>
    ))}

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

      <TouchableOpacity style={styles.addButton} onPress={addDish}>
        <Text style={styles.addButtonText}>Add Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() => navigation.navigate('Menu', { dishes: chefDishes })}
      >
        <Text style={styles.orderButtonText}>View Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:  '#FF69B4',
    backgroundColor: '#F5F5DC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
    borderRadius: 5,
  },
  dishContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  dishTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dishDescription: {
    fontSize: 14,
    color: '#800080',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  orderButton: {
    marginTop: 20,
    backgroundColor: '#ADD8E6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  orderButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  averageText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },  
  menuItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#666',
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5733',
  },
});

export default HomeScreen;
//OpenAI. (2024). HomeScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024).\
