import './style.css'
import renderCArd from './utils/renderCard';
import addBlock from './utils/addBlock';
import BtnRefresh from './components/BtnRefresh';
import refreshImg from './utils/refreshImg';

//Agrega al DOM por primera vez la card
renderCArd();
//agrega el btn de refrescar imagen
addBlock('#app', BtnRefresh, 'beforeend');
//agrega el evento de refrescar imagen
refreshImg('#btnRefresh');

const cd= document.querySelector('#card')
console.log(cd);