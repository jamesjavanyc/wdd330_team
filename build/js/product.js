<<<<<<< HEAD
import{getLocalStorage as a}from"./utils.js";let n=[];function s(t){if(t.ok)return t.json();throw new Error("Bad Response")}function c(t,e){localStorage.setItem(t,JSON.stringify(e))}function d(){fetch("../json/tents.json").then(s).then(t=>{n=t})}function i(t){const e=n.find(r=>r.Id===t.target.dataset.id);let o=a("so-cart");o==null&&(o=[]),o.push(e),c("so-cart",o)}d(),document.getElementById("addToCart").addEventListener("click",i);
=======
let products=[];function convertToJson(t){if(t.ok)return t.json();throw new Error("Bad Response")}function setLocalStorage(t,e){localStorage.setItem(t,JSON.stringify(e))}function getProductsData(){fetch("../json/tents.json").then(convertToJson).then(t=>{products=t})}function addToCart(t){const e=products.find(n=>n.Id===t.target.dataset.id);setLocalStorage("so-cart",e)}getProductsData(),document.getElementById("addToCart").addEventListener("click",addToCart);
>>>>>>> 61620455b33f8a17cc98c3502b7054622e7c39e6
