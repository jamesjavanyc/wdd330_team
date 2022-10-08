// import { getLocalStorage } from "./utils.js";
// import ProductData from "./productData.js"
import {getParam} from "./utils.js"
import ProductDetails from "./productDetails.js"
import ExternalServices from "./ExternalServices.js";
// let dataSource;
// const productId = getParam("product");
// let productDetail;

// async function initDataSource(){
//   dataSource = new ProductData();
//   await dataSource.getData();
//   productDetail = new ProductDetails(productId, dataSource);
//   await productDetail.init()
// }
// initDataSource();

const productId = getParam('product');
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();


// let products = [];
// function convertToJson(res) {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error("Bad Response");
//   }
// }


// get tents data
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch("../json/tents.json").then(convertToJson);
// }

// add to cart button event handler
// function addToCart(e) {
//   const product = products.find((item) => item.Id === e.target.dataset.id);
//   let cart = getLocalStorage("so-cart");
//   if (cart == null) cart = [];
//   cart.push(product);
//   setLocalStorage("so-cart", cart);
// }

// // add listener to Add to Cart button
// document.getElementById("addToCart").addEventListener("click", addToCart);
