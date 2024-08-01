import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

type Props = {
  moneda: number;
  setMoneda: (moneda: number) => void;
}
// Inicializa NFC Manager
NfcManager.start();
const limite = 40;

const NFCReader = (props:Props) => {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      // Función de limpieza para cancelar solicitudes NFC
      NfcManager.cancelTechnologyRequest().catch(() => {});
    };
  }, []);

  const checkNfcSupport = async () => {
    const isSupported = await NfcManager.isSupported();
    if (!isSupported) {
      Alert.alert('Error', 'NFC is not supported on this device.');
      return false;
    }
    return true;
  };

  const readNfc = async () => {
    if (!await checkNfcSupport()) return;

    try {
      await NfcManager.cancelTechnologyRequest().catch(() => {});
      await NfcManager.requestTechnology(NfcTech.Ndef);
      await NfcManager.getTag();
      
      // Incrementa el contador cuando se escanea una etiqueta NFC
      setCounter(prevCounter => {
        const newCounter = prevCounter + 1;
        if(newCounter >= limite){
          Alert.alert('¡Felicidades!', 'Has encontrado todas las monedas');
          props.setMoneda(props.moneda + 1);
          return 0;

        }
           return newCounter;
      });
    } catch (ex) {
      console.warn(ex);
      Alert.alert('Error', 'Failed to read NFC tag');
    } finally {
      NfcManager.cancelTechnologyRequest().catch(() => {});
    }
  };

  return (
    
    

    <View style={style.container}>
      <View style={style.buttonContainer}>

      <TouchableOpacity style={style.button} onPress={readNfc}>
        <Image source={require('../assets/personaje1.png')} style={style.buttonImage} />
      </TouchableOpacity>
          {/* <Button title="BUSCAME" onPress={readNfc}/> */}
      </View>

      <View style={style.counterContainer}>
        
      <Text style={style.text}> <Image source={require('../assets/gameIcon.png')} style={style.icon}/> {counter} / {limite}</Text>
      </View>


    </View>
    
  );
};

const style = StyleSheet.create({
background:{
  flex: 1,
  resizeMode: "cover",
  justifyContent: "center",
  alignItems: "center",
},
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

text:{
  color: 'white',
  position: 'absolute',
  bottom: 60,
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom:20,
  
},

buttonContainer:{
  justifyContent: 'center',
  alignItems: 'center',
},
button: {
  width: 250,
  height: 250,
 // marginHorizontal: 10,
},
buttonImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
},
counterContainer: {
  position: 'absolute',
  bottom: 60, // Ajusta la posición inferior según sea necesario

  alignItems: 'center',
},
icon: {
  width: 45,
  height: 45,
  marginRight: 8, // Espacio entre el icono y el texto
},

})
export default NFCReader;
