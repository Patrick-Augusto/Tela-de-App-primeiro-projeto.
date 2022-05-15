import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {  StatusBar ,StyleSheet, Text, SafeAreaView, Image, Dimensions, View, Button, } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
const width = Dimensions.get('screen').width
import Fonte from "../App/Fonte";
import  topo  from '../../../assets/hangarar.png';
 import hangarar from "../../mockups/Carrinho";
 export default function Topo () {
    return ( 
<>  

    <Image style={styles.topo}   source= {topo} />
    <Text style={styles.textoLogo}>{hangarar.Topo.Titulo}</Text>
   
</>
  
  );     
}


const styles = StyleSheet.create({

    topo: {
        width:"100%",
        height: 450/970* width
        
   },

   textoLogo: {
        position:"absolute",
        textAlign:"center",
        paddingVertical: 120,
        width: "100%",
        fontSize: 60,
    
        lineHeight:10,
    color:"#fff",
    fontFamily: 'Montserrat_700Bold',

},


})