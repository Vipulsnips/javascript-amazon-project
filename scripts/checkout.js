import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProduct,loadProductFetch } from "../data/products.js";
import { loadCart,loadCartFetch } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js'

// async function loadPage() {

//   try{
//     // throw 'error1';
//     await loadProductFetch();
  
//     await new Promise((resolve,reject)=>{
//       // throw 'error2';
//       loadCart(()=>{
//         // reject('error3');
//         resolve();
//       });
//     })

//   } catch(error){
//     console.log("Unexpected error. Please try again later.");
//   }

//   renderOrderSummary();
//   renderPaymentSummary();
// }
// loadPage();
async function loadCheckoutData(){
  await Promise.all([
    loadProductFetch(),
    loadCartFetch(),
  ])
  renderOrderSummary();
  renderPaymentSummary();
}
loadCheckoutData();

// Promise.all([
//   loadProductFetch(),  
//   new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })


// ]).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// });
 


// new Promise((resolve)=>{
//   loadProduct(()=>{
//     resolve();
//   })
// }).then(()=>{
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })
// }).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// });


// loadProduct(()=>{
//   loadCart(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//   })
// });
