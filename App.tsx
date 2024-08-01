import { ImageBackground, StyleSheet, View } from "react-native";
import NFCReader from "./src/components/NFCReader";
import TopButtons from "./src/components/TopButtons";
import React, { useState } from "react";

const App = () => {
  const [moneda, setMoneda] = useState(0);

  return (
   <View style={styles.container}>
     <ImageBackground source={require('./src/assets/Fondo1.png')} style={styles.background}>
     
    <TopButtons 
      moneda={moneda}
     // setMoneda={setMoneda}

    />
    <NFCReader 
      setMoneda={setMoneda}
      moneda={moneda}
    />

     </ImageBackground>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  background: {
    flex: 1,
    justifyContent: 'center', // Centrar el contenido en el eje vertical
    alignItems: 'center', // Centrar el contenido en el eje horizontal
  },
});

export default App;
