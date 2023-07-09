import './style.css'
import getData from './utils/getData'
import apiKey from './apiKey/apiKey';
import { Bengal } from './interface/Bengal';

console.log(typeof apiKey);


getData (apiKey).then(data =>{
  console.log(data<Bengal>);
  
})
.catch((error:Error) => {
  console.log(error);
  throw new Error('fallo al obtener datos')
})