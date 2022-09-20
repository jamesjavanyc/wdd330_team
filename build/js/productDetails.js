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
