import {getLocalStorage, setLocalStorage} from "./utils.js"

const baseURL = 'http://server-nodejs.cit.byui.edu:3000/'
// const baseURL = 'http://157.201.228.93:2992/'


function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

export default class ExternalServices{
    constructor(){
        // this.path = product
        // this.category = category
        // this.path = `../json/${this.category}.json`;
    }
getData(category){

        // let data = await fetch("../json/tents.json").then(res => this.convertToJson(res));
        return fetch(baseURL + `products/search/${category}`)
                .then(convertToJson).then((data) => data.Result);

                // this.products = data
        // return data;
    }
async findProductById(id){
      return await fetch(baseURL + `product/${id}`).then(convertToJson)
      .then((data) => data.Result);
        // let product = null;
        // if(this.products == null){
        //     await this.getData()
        // }
        // for(let item of this.products){
        //     if(item.Id == id){
        //         product = item
        //     }
        // }
        // return product
     
    }
    async checkout(payload) {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        };
        return await fetch(baseURL + 'checkout/', options).then(convertToJson);
      }
}
    // convertToJson(res) {
    //     if (res.ok) {
    //         return res.json();
    //     } else {
    //         throw new Error("Bad Response");
    //     }
    // }
 