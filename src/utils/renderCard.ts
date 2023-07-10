import getData from './getData';
import addBlock from './addBlock';
import apiKey from '../apiKey/apiKey';
import CartImg from '../components/CardImg';


function renderCArd():void {
  getData (apiKey).then(data =>{
    const { breeds, url }= data[0];
    const obj = { img: url, data: breeds[0] };
    addBlock('#app',CartImg(obj),'afterbegin');
  })
  .catch((error:Error): void => {
    console.log(error);
    throw new Error('fallo al obtener datos')
  })
}

export default renderCArd;