
import { StatusBar,StyleSheet,SafeAreaView,View } from 'react-native';
import react from 'react';
import { useFonts,Montserrat_400Regular,Montserrat_700Bold }from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta';
import { FontDisplay } from 'expo-font';

export default function App(){
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(!fonteCarregada){
   return <View/> 
  }
  return (
    <SafeAreaView>
     <StatusBar/>
     <Cesta/>
    </SafeAreaView>
);
}