import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// Example menu data with courses
const menuData = {
  Starter: [
    { id: '1', name: 'Ceaser Salad', price: 50 },
    { id: '2', name: 'Chicken Stripes', price: 35 },
    { id: '3', name: 'Cheesy Garlic Prawns', price: 70 },
    { id: '4', name: 'Chicken Quesadilla', price: 50 },
    { id: '5', name: 'Garden Salad', price: 80 },
  ],
  MainCourse: [
    { id: '6', name: 'Burger', price: 70 },
    { id: '7', name: 'Lambchops', price: 90 },
    { id: '8', name: 'Tamahawk', price: 100 },
    { id: '9', name: 'Pizza', price: 400 },
    { id: '10', name: 'Ribeye', price: 200 },
    { id: '11', name: 'Wings', price: 150 },
    { id: '12', name: 'Seafood', price: 400 },
  ],
  Sides: [
    { id: '13', name: 'Fries', price: 20 },
    { id: '14', name: 'Pumpkin', price: 20 },
    { id: '15', name: 'Spinach', price: 20 },
    { id: '16', name: 'Mash', price: 20 },
    { id: '17', name: 'Butternut', price: 20 },
  ],
  Dessert: [
    { id: '18', name: 'Ice Cream', price: 40 },
    { id: '19', name: 'Cake', price: 95 },
    { id: '20', name: 'Cookies', price: 30 },
    { id: '21', name: 'Sweets with Caramel', price: 100 },
    { id: '22', name: 'MilkShake', price: 45 },
  ],
};

const FilterScreen = () => {
  const [selectedCourse, setSelectedCourse] = useState('Starter'); // Default course
  const [filteredItems, setFilteredItems] = useState(menuData[selectedCourse]); // Display items for the selected course

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setFilteredItems(menuData[course]); // Filter items based on the selected course
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>

      {/* Course Filter Buttons */}
      <View style={styles.cuisineContainer}>
        {Object.keys(menuData).map((course) => (
          <TouchableOpacity
            key={course}
            style={[
              styles.cuisineButton,
              course === selectedCourse && styles.selectedButton,
            ]}
            onPress={() => handleCourseSelect(course)}
          >
            <Text style={styles.cuisineText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display the items of the selected course */}
      <Text style={styles.subtitle}>Menu for {selectedCourse}</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.menuItemText}>{item.name} - R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5DC', // Background color for the screen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  cuisineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cuisineButton: {
    padding: 10,
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#FF69B4', // Highlight selected course
  },
  cuisineText: {
    color: '#000',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  menuItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilterScreen;
