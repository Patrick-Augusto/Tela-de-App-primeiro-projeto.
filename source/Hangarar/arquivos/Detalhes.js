import React from "react";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {  StatusBar ,StyleSheet, Text, SafeAreaView, Image, Dimensions, View, Button, } from 'react-native';

import  vendedor  from '../../../assets/LogoBr.png';
import Fonte from "../App/Fonte";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import hangarar from "../../mockups/Carrinho";
 
 export default function Topo () {
    return ( 
<>  

<Text style={styles.Detalhes} > {hangarar.Detalhess.detalhes}    </Text>
         <Text style={styles.Sobre} > {hangarar.Detalhess.sobre}  </Text>
         <View style= {styles.vend}>
         <Image style={styles.vendedor}source={vendedor} />
         <Text style={styles.Nome} >{hangarar.Detalhess.nome} </Text>
         </View>
         <Text style={styles.descricao} > {hangarar.Detalhess.descricao} </Text>
               
         
   
</>
  
  );     
}


const styles = StyleSheet.create({

   
    Detalhes: {
        
        fontSize: 30,
        lineHeight: 60,
        textAlign:'center',
        color:"#fff",
        fontFamily:'Montserrat_400Regular',
         
     },
     Sobre: {
         fontFamily:'Montserrat_400Regular',
         fontSize: 25,
         lineHeight: 50,
         textAlign:'center',
         color:"#00FA9A",
     },
     Nome: {
      fontFamily:'Montserrat_700Bold',
       fontSize: 20,
       lineHeight: 25,
       color:"#778899",
       textAlign: 'left',
       marginLeft:10,
   
     },
     descricao: {
      fontFamily:'Montserrat_700Bold',
       fontSize: 18,
       lineHeight: 20,
       color:"#B0C4DE",
       textAlign:'center',
 
     },
     preco: {
      fontFamily:'Montserrat_700Bold',
       fontSize: 30,
       lineHeight: 40,
       color:"#FFD700",
       textAlign:'right',
       paddingHorizontal: 15, 
       paddingVertical: 340,
     },
 
     vendedor: {
       width:40,
       height: 40,
       margin: 10,
    },
     vend: {
        flexDirection:'row',
        padding:10,
    },
})