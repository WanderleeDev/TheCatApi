import renderCArd from "./renderCard";

function refreshImg(element: string): void {
  const tag =document.querySelector<HTMLButtonElement>(element);
  tag!.addEventListener('click', ():void =>{
    const containerCard  = document.querySelector<HTMLElement>('#app');
    const child = containerCard!.firstChild; 
    containerCard!.removeChild(child!);    
    renderCArd();
  });
}

export default refreshImg;