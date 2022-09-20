import {getLocalStorage, setLocalStorage} from "./utils.js"




export default  class ProductData{
    constructor(){
        this.products = this.getData();
    }
    async getData(){
        let data = await fetch("../json/tents.json").then(res => this.convertToJson(res));
        console.log(data)
        this.products = data
        return data;
    }
    findProductById(id){
        const product = this.products.find((item) => item.Id === id);
        let cart = getLocalStorage("so-cart");
        if (cart == null) cart = [];
        cart.push(product);
        setLocalStorage("so-cart", cart);
    }
    convertToJson(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Bad Response");
        }
    }
}