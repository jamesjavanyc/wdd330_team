export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.getData()
    }
    renderList(list) {
        const template = document.getElementById('product-card-template')
        list.forEach(product=> {
            const clone = template.content.cloneNode(true);
            const hydratedTemplate = this.prepareTemplate(clone, product);
            this.listElement.appendChild(clone);
        })
    }

    prepareTemplate(template,product) {
    template.querySelector('a').href +=  product.Id;
    template.querySelector('.card__brand').textContent = product.Brand.Name;
    template.querySelector('.card__name').textContent = product.NameWithoutBrand;
    template.querySelector('.product-card__price').textContent += product.FinalPrice; 
    template.querySelector('img').src = product.Image;
    template.querySelector('img').alt += product.Name;    
    return template
}


}

