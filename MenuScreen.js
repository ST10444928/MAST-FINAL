import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn =() => {
    if (username && password){
      navigation.navigate('Home');
    }else{
      alert('Please enter both username and password.')
    }
  }
  

  return (
    <View style={styles.container}>
      <Image
        source={require('./img/Cook.jpg')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome to Christoffel</Text>

      <TextInput
        style={styles.input}
        placeholder="Username" 
        value={username} 
        onChangeText={(text) => setUsername(text)} 
        autoCapitalize="none" 
      />

      <TextInput
        style={styles.input}
        placeholder="Password" 
        value={password} 
        onChangeText={(text) => setPassword(text)} 
        secureTextEntry 
        autoCapitalize="none" 
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F5F5DC', 
  },
  logo: {
    width: 200, 
    height: 200, 
    alignSelf: 'center',
    marginBottom: 30, 
  },
  title: {
    fontSize: 28, // Title font size
    marginBottom: 20, // Space below the title
    textAlign: 'center', // Center title text
    fontWeight: 'bold', // Bold title
  },
  input: {
    height: 40, // Height of the input fields
    borderColor: '#ccc', // Border color for input fields
    borderWidth: 1, // Border width for input fields
    marginBottom: 20, // Space below the input fields
    paddingHorizontal: 10, // Horizontal padding for input fields
    borderRadius: 5, // Rounded corners for input fields
    backgroundColor: '#fff', // White background for input fields
  },
  button: {
    marginTop: 10, // Space above button
    backgroundColor: '#007BFF', // Blue background for button
    paddingVertical: 10, // Vertical padding for button
    borderRadius: 5, // Rounded corners for button
    alignItems: 'center', // Center button text
  },
  buttonText: {
    color: '#fff', // White text color for button
    fontSize: 18, // Font size for button text
    fontWeight: 'bold', // Bold button text
  },
});

export default SignInScreen;
//OpenAI. (2024). SignInScreen Component in React Native. Available at: GitHub Repository or Your Project (Accessed: 2 October 2024)
