
import { StatusBar,StyleSheet,SafeAreaView,View } from 'react-native';
import react from 'react';
import { useFonts,Montserrat_400Regular,Montserrat_700Bold }from '@expo-google-fonts/montserrat';
import Cesta from './src/telas/Cesta/index';
import mock from'./src/Mocks/Cesta';
import { FontDisplay } from 'expo-font';
import AppLoading from 'expo-app-loading'

export default function App(){
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(!fonteCarregada){
   return <AppLoading/> 
  }
    return(
    <SafeAreaView style={{flex:1}}>
     <StatusBar/>
     <Cesta {...mock}/>
     </SafeAreaView>
  
    );
}