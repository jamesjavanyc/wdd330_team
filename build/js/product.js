import ProductData from "./productDara.js";
import ProductDetails from ".producDetails.js";
import { getParam} from "./utils.js";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();