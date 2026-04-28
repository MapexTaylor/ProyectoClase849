import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola</Text>
      <StatusBar style="auto" />
      <CustomButton 
      title={"App"} 
      onPress={()=>{
        console.log("Press desde boton App")}}>
      </CustomButton>

      <CustomButton 
      title={"Hola"}
        onPress={()=>{
          console.log("Hola como estan?")}}>
      </CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a38888',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
