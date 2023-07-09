import { Bengal } from "../interface/Bengal";

function getData(key:string= '') :Promise<Bengal>{
  return new Promise((resolve, reject) => {
    const url = new URL(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=${key}`);

    fetch(url).then(res => res.json())
    .then((data :Bengal) => {
      console.log(data);
      resolve(data);
    })
    .catch((err :Error) => {
      console.error(err);
      reject(err);
    })
  })
}

export default getData;