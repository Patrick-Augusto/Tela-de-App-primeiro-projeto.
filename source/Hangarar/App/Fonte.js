import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen'
import  { Component, StyleSheet, Text, } from 'react-native';

export default function Fonte ({children,style}) {

    let estilos = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilos = estilos.textoNegrito
    }

return <Text style={[style, estilos]}> {children} </Text>

}
 const estilos = StyleSheet.create({
 texto: {
fontFamily:'Montserrat_400Regular',
fontWeight: 'normal',
 },
textoNegrito:{
  fontFamily: ' Montserrat_700Bold',
  fontWeight:'normal',

}
  

 })