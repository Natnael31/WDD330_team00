import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

// function addProductToCart(product) {
//   const items = getLocalStorage("so-cart")|| [];
//   items.push(product)
//   setLocalStorage("so-cart", items);
// }

function addProductToCart(product) {
  let cart = localStorage.getItem("so-cart");
  cart = cart ? JSON.parse(cart) : [];
  cart.push(product);
  localStorage.setItem("so-cart", JSON.stringify(cart));
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
