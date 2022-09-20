import { renderListWithTemplate } from "./utils";

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        this.renderList(await this.dataSource.getData());
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
        template.querySelector("h3").innerText = product.Brand.Name;
        template.querySelector("h2").innerText = product.NameWithoutBrand;
        template.querySelector("p").innerText = product.ListPrice;
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
