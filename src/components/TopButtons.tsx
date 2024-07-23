// TopButtons.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TopButtons = () => {
  return (
    <View style={styles.topButtons}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button 1 pressed')}>
        <Image source={require('../assets/moneda.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button 2 pressed')}>
        <Image source={require('../assets/hongo.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button 3 pressed')}>
        <Image source={require('../assets/moneda.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 50,
    height: 50,
   // marginHorizontal: 10,
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default TopButtons;
