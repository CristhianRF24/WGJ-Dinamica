import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

// Inicializa NFC Manager
NfcManager.start();

const App = () => {
  useEffect(() => {
    return () => {
      // Cleanup function to cancel NFC requests
      NfcManager.cancelTechnologyRequest().catch(() => {});
    };
  }, []);

  const readNfc = async () => {
    try {
      // Asegúrate de que no haya solicitudes pendientes
      await NfcManager.cancelTechnologyRequest().catch(() => {});
      
      // Request NFC technology
      await NfcManager.requestTechnology(NfcTech.Ndef);
      
      // Read NFC tag
      const tag = await NfcManager.getTag();
      console.log(tag);
      Alert.alert('NFC Tag', JSON.stringify(tag));
    } catch (ex) {
      console.warn(ex);
      Alert.alert('Error', 'Failed to read NFC tag');
    } finally {
      // Cleanup the NFC request
      NfcManager.cancelTechnologyRequest().catch(() => {});
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>React Native NFC Demo</Text>
      <Button title="Read NFC" onPress={readNfc} />
    </View>
  );
};

export default App;
