import react from "react";
import { StyleSheet,View} from 'react-native';
import Detalhes from "./componentes/Detalhes";
import Topo from'./componentes/Topo';

import { processFontFamily } from "expo-font";
export default function Cesta({topo,detalhes}){
return<>
 <Topo {...topo}/>
 <View style={estilos.cesta}>
    <Detalhes{...detalhes}/>
 </View>
 </>
}
const estilos =StyleSheet.create({
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    }
});