import renderCArd from "./renderCard";

function refreshImg(element: string): void {
  const tag =document.querySelector<HTMLButtonElement>(element);
  tag?.addEventListener('click', ():void => renderCArd());
}

export default refreshImg;