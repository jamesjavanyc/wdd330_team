import { getLocalStorage } from './utils.js';
import ExternalServices from './ExternalServices.js';

const services = new ExternalServices();
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}


function packageItems(items) {
    const simplifiedItems = items.map((item) => {
      console.log(item);
      return {
        id: item.Id,
        price: item.FinalPrice,
        name: item.Name,
        quantity: 1,
      };
    });
    return simplifiedItems;
  }
export default class CheckoutProcess {
    constructor(key, outputSelector) {
      this.key = key;
      this.outputSelector = outputSelector;
      this.list = [];
      this.itemTotal = 0;
      this.shipping = 0;
      this.tax = 0;
      this.orderTotal = 0;
    }
    init() {
      this.list = getLocalStorage(this.key);
      this.calculateItemSummary();
    }
    calculateItemSummary() {
      // calculate and display the total amount of the items in the cart, and the number of items.
      const itemTotal = document.querySelector(this.outputSelector + '#subTotal');
      const itemOrder = document.querySelector(this.outputSelector + '#subtotalNumber');
      
      itemOrder.innerText = this.list.length;
      const amount = this.list.map((item)=>item.FinalPrice);
      this.itemTotal = amounts.reduce((sum,item)=> sum + item);
      itemTotal.innerText = '$' + this.itemTotal
    }
    calculateOrdertotal() {
      // calculate the shipping and tax amounts. Then use them to along with the cart total to figure out the order total
      this.shipping = 10 + (this.list.length - 1) * 2;
      this.tax = (this.itemTotal * 0.06).toFixed(2);
      this.orderTotal = (
        parseFloat(this.itemTotal) +
        parseFloat(this.shipping) +
        parseFloat(this.tax)
      ).toFixed(2);
      // display the totals.
      this.displayOrderTotals();
    }
    displayOrderTotals() {
      // once the totals are all calculated display them in the order summary page
    const shipping = document.querySelector(this.outputSelector + ' #shipping');
    const tax = document.querySelector(this.outputSelector + ' #tax');
    const orderTotal = document.querySelector(
      this.outputSelector + ' #orderTotal'
    );
    shipping.innerText = '$' + this.shipping;
    tax.innerText = '$' + this.tax;
    orderTotal.innerText = '$' + this.orderTotal;
    }
    async checkout() {
        const formElement = document.forms['checkout'];
    
        const json = formDataToJSON(formElement);
        // add totals, and item details
        json.orderDate = new Date();
        json.orderTotal = this.orderTotal;
        json.tax = this.tax;
        json.shipping = this.shipping;
        json.items = packageItems(this.list);
        console.log(json);
        try {
          const res = await services.checkout(json);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      }
    }
    
 