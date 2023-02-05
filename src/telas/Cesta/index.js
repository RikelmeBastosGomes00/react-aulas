import react from "react";
import {FlatList, StyleSheet,View} from 'react-native';
import Detalhes from "./componentes/Detalhes";
import Topo from'./componentes/Topo';
import Item from "./componentes/Item";


import { processFontFamily } from "expo-font";
import Texto from "../../Componentes/Texto";
export default function Cesta({topo,detalhes,itens}){
return<>

<FlatList
    data={itens.lista}
    renderItem={Item}
    keyExtractor={({nome}) => nome }
    ListHeaderComponent={()=>{
    return <>
<Topo {...topo}/>
<View style={estilos.cesta}>
    <Detalhes {...detalhes}/>
    <Texto style={estilos.titulo}>{itens.titulo}</Texto>
 
 </View>
    </>
    }}
    />
 </>
}
const estilos =StyleSheet.create({
    titulo:{
        color:"46464646",
        fontWeight:"bold",
        marginTop:32,
        marginBo000ttom:8,
        fontSize:20,
        lineHeight:32,
      },
    cesta:{
        paddingVertical:8,
        paddingHorizontal:16,
    }
});