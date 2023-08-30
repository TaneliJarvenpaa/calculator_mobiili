import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const [data, setData] = useState([]);

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

    let newResult = '';
    if (operator === '+') {
      newResult = (num1 + num2).toString();
    } else if (operator === '-') {
      newResult = (num1 - num2).toString();
    }

    setResult(newResult);
    setData([...data, { key: `${num1} ${operator} ${num2} = ${newResult}` }]);
  };

  useEffect(() => {
    setData([]);
  }, []);

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
        <View style={styles.buttonSpace} />
        <Button onPress={() => handleCalculation('-')} title="-" />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
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
  buttonSpace: {
    width: 20,
  },
  result: {
    fontSize: 30,
    color: '#4682B4',
  },
  listContainer: {
    borderColor: 'black',
    width: 200,
    height: 100,
    borderWidth: 1,
    marginBottom: 10,
    marginTop: 20,
  },
});
