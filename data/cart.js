export const cart=[];
export function addtocart(productId){
let matchingItem;
  const  quantity= Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  cart.forEach((obj)=>{
    if(obj.productId === productId){
      matchingItem=obj;
    }
  })
  if(matchingItem){
    matchingItem.quantity+=quantity;
  }
  else{
    cart.push({
      productId:productId,
      quantity:quantity
    })
  }
}