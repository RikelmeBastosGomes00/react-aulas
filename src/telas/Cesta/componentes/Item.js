import React from "react";
import Texto from "../../../Componentes/Texto";
import {Image,View,StyleSheet,FlatList } from "react-native";
export default function Item({item: {nome,imagem} }){
   return <View style={estilos.item}> 
   <Image source={imagem} style={estilos.imagem}/>
   <Texto style={estilos.nome}>{nome}</Texto> 
    </View>

        }
       
 const estilos =StyleSheet.create({ 

item:{
borderBottomWidth:1,
flexDirection:"row",
borderBottomColor:"#ECECEC",
paddingVertical:16,
marginHorizontal:16,
alignItems:"center",

imagem:{
width:10,
height:10,

},
nome:{
fontSize:20,
lineHeight:26,
marginLeft:11,
color:"#464646"
}

 }})

