export let cart=JSON.parse(localStorage.getItem('cart')) || [
{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:2
}];

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}
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
  saveToStorage();
}

export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((item)=>{
    if(item.productId !== productId) newCart.push(item);
  })
  cart=newCart;
  saveToStorage();
}