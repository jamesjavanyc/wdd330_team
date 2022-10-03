<<<<<<< HEAD
var a=(c,r,d)=>new Promise((e,s)=>{var u=t=>{try{i(d.next(t))}catch(o){s(o)}},p=t=>{try{i(d.throw(t))}catch(o){s(o)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(u,p);i((d=d.apply(c,r)).next())});import{setLocalStorage as l}from"./utils.js";export default class n{constructor(r,d){this.productId=r,this.product={},this.dataSource=d}init(){return a(this,null,function*(){this.product=yield this.dataSource.findProductById(this.productId),document.querySelector("main").innerHTML=this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))})}addToCart(){l("so-cart",this.product)}renderProductDetails(){return`<section class="product-detail"> <h3>${this.product.Brand.Name}</h3>
    <h2 class="divider">${this.product.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${this.product.Image}"
      alt="${this.product.NameWithoutBrand}"
    />
    <p class="product-card__price">$${this.product.FinalPrice}</p>
    <p class="product__color">${this.product.Colors[0].ColorName}</p>
    <p class="product__description">
    ${this.product.DescriptionHtmlSimple}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${this.product.Id}">Add to Cart</button>
    </div></section>`}}
=======
import{getLocalStorage as e,setLocalStorage as r}from"./utils.js";export class ProductDetails{constructor(t,o){this.productId=t,this.product={},this.dataSource=o}init(){return this.productDetail=this.dataSource.findProductById(this.productId),this.productDetail}addToCart(){let t=e("so-cart");t==null&&(t=[]),t.push(this.productDetail),r("so-cart",t)}renderProduct(t){const o=`
        <section class="product-detail">
          <h3>The North Face</h3>
          <h2 class="divider"></h2>
          <img class="divider"
              src="../images/tents/the-north-face-talus-tent-4-person-3-season-in-golden-oak-saffron-yellow~p~985rf_01~320.jpg"
              alt="Talus Tent - 4-Person, 3-Season" />

          <p class="product-card__price">$199.99</p>
          <p class="product__color">Golden Oak/Saffron Yellow</p>
          <p class="product__description">
              Enjoy a fun night under stars with your favorite people in The North
              Face&#39;s Talus four-person tent, featuring durable construction with
              a roomy interior, an advanced DAC Featherlite NSL pole system and an
              easy to pitch design.
          </p>
          <div class="product-detail__add">
              <button id="addToCart" data-id="989CG">Add to Cart</button>
          </div>
      </section>`;return console.log(o),o}}
>>>>>>> 81d85bd367c0ba50e044b0bef63209bbf8ad2540
