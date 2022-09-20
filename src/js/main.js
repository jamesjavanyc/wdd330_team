import ProductData from "./productData.js"
import {getParam} from "./utils.js"
import {ProductDetails} from "./productDetails.js"
import ProductList from "./productList.js"


let dataSource;
// const productId = getParam("product");
// let productDetail;
let productList;

async function initDataSource(){
    dataSource = new ProductData();
    await dataSource.getData();
    // productDetail = new ProductDetails(productId, dataSource);
    // await productDetail.init()
    productList = new ProductList("tents", dataSource, document.querySelector(".product-list"));
    await productList.init()
}
initDataSource();
