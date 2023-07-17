import logoBtn from '../img/svg/refresh.svg'
const BtnRefresh = `
  <button id="btnRefresh" class="bg-slate-200 grid grid-cols-2 items-center py-4 px-8 rounded-lg justify-self-center active:bg-slate-400 duration-150">
  <img class="w-10" src=${logoBtn} alt="">
  <p class="font-medium tracking-widest uppercase">Refresh</p>
  </button>
`;

export default BtnRefresh.trim();