
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad response");
  }
}


export default class ProductData {
    /*constructor(tents){*/
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
  }

  getData() {
    return fetch(this.path)
    .then(convertToJson).then((data) => data);
  }
        /*let data = await fetch("../json/tents.json").then(res => this.convertToJson(res));
        this.products = data
        return data;*/

  async findProductById(id) {
        /*let product = null;
        if(this.products == null){
            await this.getData()
        }*/   
    const products = await this.getData() 
    return products.find((item) => item.Id === id);
  }
      /*for(let item of this.products){
        if(item.Id == id){
          product = item
        }
      }
      return product*/

}