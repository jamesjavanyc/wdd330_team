import { renderListWithTemplate } from "./utils";

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
      /*this.renderList(await this.dataSource.getData());*/
      const list = await this.dataSource.getData();
      this.renderList(list);
    }
    // renderList(list) {
    //     const template = document.getElementById("product-card-template");
    //     list.forEach((product) => {
    //         this.listElement.appendChild(this.prepareTemplate(template.content.cloneNode(true), product));
    //     });
    // }
    prepareTemplate(template, product) {
        template.querySelector("a").href += product.Id;
        template.querySelector("img").src = product.Image;
        template.querySelector('.card__brand').textContent = product.Brand.Name;
        template.querySelector('.card__name').textContent = product.NameWithoutBrand;
        template.querySelector('.product-card__price').textContent += product.FinalPrice; 
        return template;
    }
    renderList(list) {
        // make sure the list is empty
        this.listElement.innerHTML = "";
        //get the template
        const template = document.getElementById("product-card-template");
        renderListWithTemplate(template, this.listElement, list, this.prepareTemplate);
        
    }
}
