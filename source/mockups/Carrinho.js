import  topo  from '../../assets/hangarar.png';
import  vendedor  from '../../assets/LogoBr.png';
import Gasolina1 from '../../assets/Itens/Gasolina.png'
import Gasolina2 from '../../assets/Itens/Gasolina2.jpg'
import Gasolina3 from '../../assets/Itens/Gasolina3.jpg'
import Gasolina4 from '../../assets/Itens/Gasolina4.jpg'

const hangarar ={
 Topo:{
     Titulo:"Hangarar",
     Imagemfundo: topo,
 },
 Detalhess:{
     detalhes:" Detalhes do combustivel",
     sobre: "Combustivel BR Aviation",
     nome: "Aviation Posto BR",
     logovendedor: vendedor,
     descricao: "Combustivel a pronta entrega aonde quer que voce esteja,de maneira segura e facil, do jeito que o piloto quer e ainda por cima pode acumular milhas para as suas Viagems, Compras futuras ou ate mesmo Brindes. "
  },

  itens:{
      titulo:"intens no carrinho",
      lista:[
          {
           nome: "Gasolina 1",
           imagem: Gasolina1 ,
          },

          {
            nome: "Gasolina 2",
            imagem: Gasolina2,
           },


           {
            nome: "Gasolina 3",
            imagem: Gasolina3,
           },

           {
            nome: "Gasolina 4",
            imagem: Gasolina4,
           },




      ]
},

}
export default  hangarar 
