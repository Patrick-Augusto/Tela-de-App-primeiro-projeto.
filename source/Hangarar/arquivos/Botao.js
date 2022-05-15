import { StyleSheet, Text,  View, TouchableOpacity, TouchableWithoutFeedback, style,  Dimensions,  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import React, { Component } from 'react';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';


export default class Botao extends Component {
  render(){
  return (
<View style = { [StyleSheet.Botao, this.props.styles] }>
<TouchableWithoutFeedback> 

<Text style={styles.Botao}> R$7,80 L </Text>

</TouchableWithoutFeedback>

   </View>

   );
 }
}


const styles = StyleSheet.create ({

 Botao:{
  alignItems: 'center',
  position:"absolute",
  color: "#FFD700",
  marginLeft:260,
  paddingHorizontal:10, 
  paddingVertical: 740,
  fontFamily: 'Montserrat_700Bold',
  fontSize: 30,
  

  

}
});