
import logo from '../../assets/logo.png';
import Analista from '../../assets/frutas/Analista.png'
import kidrobot from '../../assets/frutas/kidRobot.png';
import Assistente from '../../assets/frutas/Assistente.png';
import game from '../../assets/frutas/game.png';
import kidtube from '../../assets/frutas/kid-tube.png';

const cesta = {
topo: {
titulo:"Escola de Robótica e Programação :",
},
detalhes :{
nome:"Cursos ofertados",
nomeFazenda:"codigokid",
logoFazenda:logo,
descricao:"Aprenda se divertindo e realize seus sonhos!",
preco:"",
botao:"Assinar",
},
itens: {
    titulo: "Cursos:",
    lista: [
      {
        nome: "Curso de Analista Tech",
        imagem: Analista,
      },
        
       
      {
        nome: "Curso KidRobot - MIO",
        imagem:kidrobot,
      },
      {
        nome: "Curso de Assistente de Redes e Infra",
        imagem: Assistente,
      },
      {
        nome: "Curso de games",
        imagem:game,
      },
      {
        nome: "Curso de Youtuber",
        imagem: kidtube,
      }
    ]
  }
}

export default cesta;
