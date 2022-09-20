import {convertToJson} from "./utils"

export default  class ProductData{
    constructor(){

    }
    getData(){
        let data = fetch("../json/tents.json").then(convertToJson);
        return data;
    }
    findProductById(){

    }
    convertToJson(res) {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error("Bad Response");
        }
    }
}