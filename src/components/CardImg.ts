

const CartImg = ({...params})=> {
  const {img, data} = params;
  const {name, description, origin} =data;

  return(`
    <figure class="card w-80 border- border-slate-200 border-solid relative overflow-hidden shadow-md shadow-slate-400 hover:">
        <img class="object-cover" src=${img} alt=${name}>
        <figcaption class="relative z-10 flex justify-around text-white tracking-wider">
          <span class="p-2 text-center flex-grow text-sm bg-black ">${name}</span>
          <span class="p-2 text-center flex-grow text-sm text-black bg-slate-200">Origin:  ${origin}</span>
        </figcaption>
        <div class="absolute top-10 h-full opacity-0 bg-black/50 duration-300 px-4 py-8 hover:opacity-100 hover:top-0">
            <p class="text-white">${description}</p>
        </div>
    </figure>
  `).trim()
}

export default CartImg;