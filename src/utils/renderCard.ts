import getData from './getData';
import addBlock from './addBlock';
import apiKey from '../apiKey/apiKey';
import CartImg from '../components/CardImg';


function renderCArd():void {
  getData (apiKey).then(data =>{
    const dat = data.map((d)=>{
      const { breeds, url} = d;
      return(`${CartImg({img: url, data:breeds[0]})}`)
    }).join('')
    
    addBlock('#app',dat,'afterbegin');
  })
  .catch((error:Error): void => {
    console.log(error);
    throw new Error('fallo al obtener datos')
  })
}

export default renderCArd;