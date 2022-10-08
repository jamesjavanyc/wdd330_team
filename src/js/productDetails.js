import {getLocalStorage, setLocalStorage, loadHeaderFooter} from "./utils.js"

loadHeaderFooter()
export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }
    async init(){
      this.productDetail = await this.dataSource.findProductById(this.productId)
      document.querySelector(".divider").innerHTML = this.renderProductDetails(this.productDetail);
      document.getElementById("addToCart").addEventListener("click", this.addToCart.bind(this));
    }
    // addToCart() {
    //   let cart = getLocalStorage("so-cart");
    //   if (cart == null) cart = [];
    //   cart.push(this.productDetail);
    //   setLocalStorage("so-cart", cart);
    // }

    addToCart() {
       
      let cartContents = getLocalStorage('so-cart');
   
      if(!cartContents){
        cartContents = [];
      }
       
      cartContents.push(this.product);
      setLocalStorage('so-cart', cartContents);
      alertMessage(`${this.product.NameWithoutBrand} added to cart!`)
  }
    // renderProductDetails(detail) {
    //   console.log(detail)
    //     const item =  `
    //     <section class="product-detail">
    //       <h3>${detail.Brand.Name}</h3>
    //       <h2 class="divider">${detail.NameWithoutBrand}</h2>
    //       <img class="divider"
    //           src="${detail.Image}"
    //           alt="Talus Tent - 4-Person, 3-Season" />
    //       <p class="product-card__price">${detail.ListPrice}</p>
    //       <p class="product__color">${detail.Colors}</p>
    //       <p class="product__description">
    //           ${detail.DescriptionHtmlSimple}
    //       </p>
    //       <div class="product-detail__add">
    //           <button id="addToCart" data-id="989CG">Add to Cart</button>
    //       </div>
    //   </section>`;
    //   return item;
    // }
    renderProductDetails() {
      return `<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
      <h2 class="divider">${this.product.NameWithoutBrand}</h2>
      <img
        class="divider"
        src="${this.product.Images.PrimaryLarge}"
        alt="${this.product.NameWithoutBrand}"
      />
      <p class="product-card__price">$${this.product.FinalPrice}</p>
      <p class="product__color">${this.product.Colors[0].ColorName}</p>
      <p class="product__description">
      ${this.product.DescriptionHtmlSimple}
      </p>
      <div class="product-detail__add">
        <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
      </div></section>`;
    }
  
}
