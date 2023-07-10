import renderCArd from "./renderCard";

function refreshImg(element: string): void {
  document.querySelector<HTMLButtonElement>(element)
  ?.addEventListener('click', ():void => renderCArd());
}

export default refreshImg;