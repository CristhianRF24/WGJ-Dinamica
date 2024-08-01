// TopButtons.js
import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Alert, Text } from 'react-native';

type Props = {
  moneda: number;
  //setMoneda: (moneda: number) => void;
}
const TopButtons = (props: Props) => {
    return (
    <View style={styles.topButtons}>
      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Button 1 pressed')}>
        
        <Image source={require('../assets/moneda.png')} style={styles.buttonImage}  />
        <Text style={styles.text}>{props.moneda}</Text>
        
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    position: 'absolute',
    top: 6,
    width: '100%',
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
  text:{
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default TopButtons;
