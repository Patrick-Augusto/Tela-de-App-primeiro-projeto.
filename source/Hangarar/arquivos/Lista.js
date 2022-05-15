import React from "react";
import {FlatList} from 'react-native';
import hangarar from "../../mockups/Carrinho";
import { Conteudolista } from "../../components/conteudoLista";


export default function Lista () {
    return(
    <FlatList
        data={hangarar.itens.lista}
        keyExtractor={item=>item.nome}
        renderItem={({item})=>(
            <Conteudolista
                Nome={item.nome}
                Imagem={item.imagem}
            />
        )}
    />


    );    
}