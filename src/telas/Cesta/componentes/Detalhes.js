import React from "react";
import {View,Image,StyleSheet,TouchableOpacity} from "react-native";


import Texto from "../../../Componentes/Texto";

export default function Detalhes ({nome,nomeFazenda,logoFazenda,descricao,preco,botao}){
    return<>
        <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.Fazenda}>
    <Image source={logoFazenda} style={estilos.imgFazenda}/>
        <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
    </View>
    <Texto style={estilos.desc}>{descricao}</Texto>
     <Texto style={estilos.preco}>{preco}</Texto>

     <TouchableOpacity style = {estilos.botao}>
        <Texto style ={estilos.Textobotao}>{botao}</Texto>
        </TouchableOpacity> 
    </>
}
const estilos =StyleSheet.create({
    nome:{
        color:"000",
        fontSize:26,
        lineHeight:42,
        fontWeight:"bold",
        
        },
        Fazenda:{
        flexDirection:"row",
        paddingVertical:12,
        
        },
        imgFazenda:{
        width:32,
        height:32,
        },
        nomeFazenda:{
        color:"#CDCD00",
        fontSize:16,
        lineHeight:26,
        marginLeft:12,
        fontFamily:"MontserratRegular",
        
        },
        desc:{
        color:"#0000CD",
        fontSize:16,
        lineHeight:26
        },
        preco:{
        color:"#00255",
        fontWeight:"bold",
        fontSize:26,
        lineHeight:42,
        marginTop:8
        },
        botao:{
        marginTop:16,
        backgroundColor:"#EEEE00",
        paddingVertical:16,
        borderRadius:6
        },
        Textobotao:{
        textAlign:"center",
        color:"#fff",
        fontSize:16,
        lineHeight:26,
        fontWeight:"bold",
        },
    
})