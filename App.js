import { StatusBar ,StyleSheet, Text, SafeAreaView, Image, Dimensions, View, Button, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import Topo from './source/Hangarar/arquivos/Topo';
import Detalhes from './source/Hangarar/arquivos/Detalhes'
import Botao from './source/Hangarar/arquivos/Botao';
import Mocks from './source/mockups/Carrinho'
import Lista from './source/Hangarar/arquivos/Lista';
import AppLoading from 'expo-app-loading';

export default function App() { 
 
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  
   
  });

  if(!fontsLoaded){

    return <AppLoading/>
  }
 
  return (

    <SafeAreaView style={styles.container}>
         <Botao/>
         <Topo {...Mocks.Topo} />
         <Detalhes {...Mocks.Detalhess} />
         <Lista {...Mocks.itens.lista}/>
         
      <StatusBar />
     </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
     container: {
       flex: 1,
       backgroundColor: '#171f2d',
   
  },

   

}); 
