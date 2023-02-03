import { getNode } from "../lib/index.js";
// import { product } from "../../server/db/data.json";

const list_wrapper = getNode('.recommend-list')


function cart_show(e) {
  let showButton = e.target.closest('.recommend-list__cart-add');
  let listWrapper = e.target.closest('.recommend-list');

  if (!showButton || !listWrapper) return;

  console.log('dd')

}

list_wrapper.addEventListener('click', cart_show);
