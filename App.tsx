import { StyleSheet, View } from "react-native";
import NFCReader from "./src/components/NFCReader";
import TopButtons from "./src/components/TopButtons";

const App = () => {
  return (
   <View style={styles.container}>
    <TopButtons/>
    <NFCReader />
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});

export default App;
