<<<<<<< HEAD
import t from"./productData.js";import o from"./productDetails.js";import{getParam as r}from"./utils.js";const c=new t("tents"),a=r("product"),s=new o(a,c);s.init();
=======
var s=(c,a,o)=>new Promise((d,l)=>{var n=t=>{try{r(o.next(t))}catch(e){l(e)}},m=t=>{try{r(o.throw(t))}catch(e){l(e)}},r=t=>t.done?d(t.value):Promise.resolve(t.value).then(n,m);r((o=o.apply(c,a)).next())});import"./utils.js";import p from"./productData.js";import{getParam as D}from"./utils.js";import{ProductDetails as g}from"./productDetails.js";let i;const f=D("product");let u;function j(){return s(this,null,function*(){i=new p;let c=yield i.getData();u=new g(f,i);let a=yield u.init();console.log(a)})}j(),console.log(1);
>>>>>>> 81d85bd367c0ba50e044b0bef63209bbf8ad2540
