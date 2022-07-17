import React from "react";
import {View, Text, Image, StyleSheet} from 'react-native';
export function Conteudolista ({Nome, Imagem}){
return(
    <View style={styles.conteudolista}>
        <Text style={styles.text}>{Nome}</Text>
        <Image style={styles.img} source={Imagem}/>
    </View>

);

}

const styles = StyleSheet.create ({

conteudolista: {
    flexDirection:'row',
    padding: 10, 
    justifyContent: 'space-between',
    alignItems: 'center',

    
},

text:{
    fontFamily:'Montserrat_700Bold',
    fontSize: 18,
    color:"#FFf",
    textAlign:'right',
    
},

img:{
    height:50,
    width: 50, 
    
}



}); 
