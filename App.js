import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

export default function App() {
  const [unit, setUnit] = useState('C'); // 'C' for Celsius, 'F' for Fahrenheit
  const [selectedCity, setSelectedCity] = useState('Saskatoon'); // Default city
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Static weather data
  const weatherData = [
    { city: 'Saskatoon', temperatureC: 22, condition: 'Sunny' },
    { city: 'Regina', temperatureC: 19, condition: 'Cloudy' },
    { city: 'Prince Albert', temperatureC: 16, condition: 'Rainy' },
  ];

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'C' ? 'F' : 'C'));
  };

  const convertTemperature = (tempC) => {
    return unit === 'C' ? tempC : (tempC * 9) / 5 + 32;
  };

  const handleCityChange = (event) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
    setSelectedCity(event.nativeEvent.value);
  };

  const selectedWeather = weatherData.find((data) => data.city === selectedCity);

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>Weather App</Text>
      <Button
        onPress={toggleUnit}
        title={`Toggle to ${unit === 'C' ? 'Fahrenheit' : 'Celsius'}`}
        accessibilityLabel="Toggle Temperature Unit"
      />

      <SegmentedControl
        values={['Saskatoon', 'Regina', 'Prince Albert']}
        selectedIndex={selectedIndex}
        onChange={handleCityChange}
      />

      <View style={styles.details}>
        <Text>{selectedWeather.city}</Text>
        <Text>{selectedWeather.condition}</Text>
        <Text>{convertTemperature(selectedWeather.temperatureC)}°{unit}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  details: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 6,
    padding: 4,
    margin: 10,
  }
});
