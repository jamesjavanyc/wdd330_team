import {getLocalStorage, setLocalStorage} from "./utils.js"

export default class ProductData{
    constructor(tents){

    }
    async getData(){
        let data = await fetch("../json/tents.json").then(res => this.convertToJson(res));
        this.products = data
        return data;
    }
    async findProductById(id){
        let product = null;
        if(this.products == null){
            await this.getData()
        }
        for(let item of this.products){
            if(item.Id == id){
                product = item
            }
        }
        return product
    }
    convertToJson(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Bad Response");
        }
    }
}