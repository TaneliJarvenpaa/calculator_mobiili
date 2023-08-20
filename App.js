import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleNumberChange = (text, numberType) => {
    if (numberType === 1) {
      setNumber1(text);
    } else if (numberType === 2) {
      setNumber2(text);
    }
  };

  const handleCalculation = (operator) => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

     
    if (operator === '+') {
      setResult((num1 + num2).toString());
    } else if (operator === '-') {
      setResult((num1 - num2).toString());
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Result: {result}</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Enter number"
        style={styles.input}
        onChangeText={(text) => handleNumberChange(text, 1)}
      />

      <TextInput
        keyboardType="numeric"
        placeholder="Enter number"
        style={styles.input}
        onChangeText={(text) => handleNumberChange(text, 2)}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={() => handleCalculation('+')} title="+" />
        <View style={styles.buttonSpace}/>
        <Button onPress={() => handleCalculation('-')} title="-" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    width: 200,
    borderWidth: 1,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonSpace:
  {
    width:20
  },
  result:{
    fontSize:30,
    color:'#4682B4'
  }
});

