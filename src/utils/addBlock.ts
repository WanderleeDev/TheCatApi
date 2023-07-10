const addBlock = (
  target: string,
  content: string | HTMLElement,
  position: InsertPosition = "beforebegin"
): void => {
  const element = document.querySelector<HTMLElement>(target);
  const err =
    "Formatos permitidos: elementos HTML, o cadenas de string en formato HTML Y posiciones válidas: beforeend,afterend,afterbegin, valor por defecto beforebegin";

  if (
    typeof content === "string" &&
    content.startsWith("<") &&
    content.endsWith(">")
  ) {
    element!.insertAdjacentHTML(position, content);
  } else if (content instanceof HTMLElement) {
    element!.insertAdjacentElement(position, content);
  } else {
    console.error(err);
  }
};

export default addBlock;
