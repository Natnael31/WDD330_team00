import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { renderCartContents } from "./cart";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("tents", dataSource, element);

listing.init();
renderCartContents();
